import { Kind, type PlainObject, type PlainObjectItem, type Undefinable } from '@jamashita/anden/type';
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { ConfigError } from './ConfigError.js';

export class Config {
  private readonly config: PlainObject;
  private readonly cache: Map<string, unknown>;

  public constructor(dir: string, env: string) {
    const defaultConfig: PlainObject = this.loadDefault(dir);
    const envConfig: PlainObject = this.load(dir, env);
    this.config = {
      ...defaultConfig,
      ...envConfig
    };
    this.cache = new Map();
  }

  public get<T>(property: string): T {
    const value: Undefinable<unknown> = this.cache.get(property);

    if (!Kind.isUndefined(value)) {
      return value as T;
    }

    const v: T = this.traverse(property) as T;

    this.cache.set(property, v);

    return v;
  }

  public has(property: string): boolean {
    try {
      const value: Undefinable<unknown> = this.cache.get(property);

      if (!Kind.isUndefined(value)) {
        return true;
      }

      const v: unknown = this.traverse(property);

      this.cache.set(property, v);

      return true;
    } catch {
      return false;
    }
  }

  private load(dir: string, env: string): PlainObject {
    const cwd: string = process.cwd();
    const jsonFile: string = path.join(cwd, dir, `${env}.json`);

    if (fs.existsSync(jsonFile)) {
      const json: string = fs.readFileSync(jsonFile, 'utf8');

      return JSON.parse(json) as PlainObject;
    }

    const ymlFile: string = path.join(cwd, dir, `${env}.yml`);

    if (fs.existsSync(ymlFile)) {
      const yml: string = fs.readFileSync(ymlFile, 'utf8');

      return YAML.parse(yml) as PlainObject;
    }

    const yamlFile: string = path.join(cwd, dir, `${env}.yaml`);

    if (fs.existsSync(yamlFile)) {
      const yaml: string = fs.readFileSync(yamlFile, 'utf8');

      return YAML.parse(yaml) as PlainObject;
    }

    throw new ConfigError(`CONFIG FILE NOT FOUND: ${dir}/${env}`);
  }

  private loadDefault(dir: string): PlainObject {
    try {
      return this.load(dir, 'default');
    } catch (e: unknown) {
      if (e instanceof ConfigError) {
        return {};
      }

      throw e;
    }
  }

  private traverse(property: string): PlainObject | PlainObjectItem {
    const elements: Array<string> = property.split('.');

    return this.traverseRecursive(elements, this.config);
  }

  private traverseRecursive(elements: Array<string>, value: PlainObject | PlainObjectItem): PlainObject | PlainObjectItem {
    if (Kind.isPrimitive(value)) {
      if (elements.length === 0) {
        return value;
      }

      throw new ConfigError('CANNOT TRAVERSE PRIMITIVE VALUE');
    }
    if (elements.length === 0) {
      return value;
    }

    const [element, ...rest] = elements;
    const key: string = element as string;
    // @ts-expect-error
    const v: Undefinable<PlainObjectItem> = value[key] as Undefinable<PlainObjectItem>;

    if (Kind.isUndefined(v)) {
      throw new ConfigError(`CONFIG PROPERY NOT FOUND: ${key}`);
    }

    return this.traverseRecursive(rest, v);
  }
}

// biome-ignore lint/complexity/useLiteralKeys: <explanation>
export const config: Config = new Config(process.env['CONFIG_DIR'] ?? 'config', process.env['NODE_ENV'] ?? 'development');
