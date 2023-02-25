import { Ambiguous, Kind, PlainObject, PlainObjectItem } from '@jamashita/anden/type';
import fs from 'fs';
import path from 'path';
import YAML from 'yaml';
import { ConfigError } from './ConfigError.js';

export class Config {
  private readonly config: PlainObject;

  public constructor(dir: string, env: string) {
    this.config = this.load(dir, env);
  }

  public get<T>(property: string): T {
    return this.traverse(property) as T;
  }

  public has(property: string): boolean {
    try {
      this.traverse(property);

      return true;
    }
    catch {
      return false;
    }
  }

  private load(dir: string, env: string): PlainObject {
    const cwd: string = process.cwd();
    const jsonFile: string = path.join(cwd, dir, `${env}.json`);

    // eslint-disable-next-line node/no-sync
    if (fs.existsSync(jsonFile)) {
      // eslint-disable-next-line node/no-sync
      const json: string = fs.readFileSync(jsonFile, 'utf8');

      return JSON.parse(json) as PlainObject;
    }

    const ymlFile: string = path.join(cwd, dir, `${env}.yml`);

    // eslint-disable-next-line node/no-sync
    if (fs.existsSync(ymlFile)) {
      // eslint-disable-next-line node/no-sync
      const yml: string = fs.readFileSync(ymlFile, 'utf8');

      return YAML.parse(yml) as PlainObject;
    }

    const yamlFile: string = path.join(cwd, dir, `${env}.yaml`);

    // eslint-disable-next-line node/no-sync
    if (fs.existsSync(yamlFile)) {
      // eslint-disable-next-line node/no-sync
      const yaml: string = fs.readFileSync(yamlFile, 'utf8');

      return YAML.parse(yaml) as PlainObject;
    }

    throw new ConfigError(`Config file not found: ${dir}/${env}`);
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

      throw new ConfigError('Cannot traverse primitive value');
    }
    if (elements.length === 0) {
      return value;
    }

    const [element, ...rest] = elements;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const key: string = element!;
    // @ts-expect-error
    const v: Ambiguous<PlainObjectItem> = value[key] as Ambiguous<PlainObjectItem>;

    if (Kind.isUndefined(v)) {
      throw new ConfigError(`Config property not found: ${key}`);
    }

    return this.traverseRecursive(rest, v);
  }
}
