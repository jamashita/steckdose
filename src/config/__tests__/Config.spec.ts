import { Config } from '../Config.js';
import { ConfigError } from '../ConfigError.js';

describe('Config', () => {
  describe('get', () => {
    it.each`
    key | expected
    ${'a'} | ${{ b: { c: ['d', 'e', 'f'] } }}
    ${'a.b'} | ${{ c: ['d', 'e', 'f'] }}
    ${'a.b.c'} | ${['d', 'e', 'f']}
    ${'g'} | ${{ h: { i: null, j: 961, k: 'R4Q' } }}
    ${'g.h'} | ${{ i: null, j: 961, k: 'R4Q' }}
    ${'g.h.i'} | ${null}
    ${'g.h.j'} | ${961}
    ${'g.h.k'} | ${'R4Q'}
    ${'l'} | ${128.2}
    ${'m'} | ${null}
    `('load test.json when json file exists, json is prioritised, key is $key', ({
      key,
      expected
    }: { key: string; expected: unknown; }) => {
      const config: Config = new Config('config1', 'test');

      expect(config.get(key)).toEqual(expected);
    });

    it.each`
    key | expected
    ${'a'} | ${{ b: { c: 1, d: { e: 'f' } } }}
    ${'a.b'} | ${{ c: 1, d: { e: 'f' } }}
    ${'a.b.c'} | ${1}
    ${'a.b.d'} | ${{ e: 'f' }}
    ${'a.b.d.e'} | ${'f'}
    ${'g'} | ${{ h: 'i', j: null, k: 'XK7bN' }}
    ${'g.h'} | ${'i'}
    ${'g.j'} | ${null}
    ${'g.k'} | ${'XK7bN'}
    ${'l'} | ${{ m: 788.64 }}
    ${'l.m'} | ${788.64}
    `('load test.yml when json file does not exist, yml is prioritised, key is $key', ({
      key,
      expected
    }: { key: string; expected: unknown; }) => {
      const config: Config = new Config('config2', 'test');

      expect(config.get(key)).toEqual(expected);
    });

    it.each`
    key | expected
    ${'a'} | ${{ b: { c: 1, d: { e: 'f' } } }}
    ${'a.b'} | ${{ c: 1, d: { e: 'f' } }}
    ${'a.b.c'} | ${1}
    ${'a.b.d'} | ${{ e: 'f' }}
    ${'a.b.d.e'} | ${'f'}
    ${'g'} | ${{ h: 'i', j: null, k: 'XK7bN' }}
    ${'g.h'} | ${'i'}
    ${'g.j'} | ${null}
    ${'g.k'} | ${'XK7bN'}
    ${'l'} | ${{ m: 788.64 }}
    ${'l.m'} | ${788.64}
    `('load test.yaml when json and yml file does not exist, yaml is prioritised, key is $key', ({
      key,
      expected
    }: { key: string; expected: unknown; }) => {
      const config: Config = new Config('config3', 'test');

      expect(config.get(key)).toEqual(expected);
    });

    it('throws ConfigError when config file does not exist', () => {
      expect(() => {
        // eslint-disable-next-line no-new
        new Config('config4', 'test');
      }).toThrow(ConfigError);
    });

    it('throws ConfigError when config file is not json, yml or yaml', () => {
      expect(() => {
        // eslint-disable-next-line no-new
        new Config('config5', 'test');
      }).toThrow(ConfigError);
    });

    it.each`
    key
    ${'a.b.c.d'}
    ${'a.b.c.d.e'}
    ${'a.b.c.d.e.f'}
    ${'g.z'}
    ${'l.m'}
    ${'l.m.n'}
    ${'n'}
    `('throws ConfigError when config file does not have the given property, key is $key', ({ key }: { key: string; }) => {
      const config: Config = new Config('config1', 'test');

      expect(() => {
        config.get(key);
      }).toThrow(ConfigError);
    });

    it.each`
    key | expected
    ${'a'} | ${{ b: { c: ['d', 'e', 'f'] } }}
    ${'a.b'} | ${{ c: ['d', 'e', 'f'] }}
    ${'a.b.c'} | ${['d', 'e', 'f']}
    ${'g'} | ${{ h: { i: null, j: 961, k: 'R4Q' } }}
    ${'g.h'} | ${{ i: null, j: 961, k: 'R4Q' }}
    ${'g.h.i'} | ${null}
    ${'g.h.j'} | ${961}
    ${'g.h.k'} | ${'R4Q'}
    ${'l'} | ${128.2}
    ${'m'} | ${null}
    ${'n'} | ${'o'}
    `('load test.json when json file exists, json is prioritised, key is $key', ({
      key,
      expected
    }: { key: string; expected: unknown; }) => {
      const config: Config = new Config('config6', 'test');

      expect(config.get(key)).toEqual(expected);
    });
  });

  describe('has', () => {
    it.each`
    key
    ${'a'}
    ${'a.b'}
    ${'a.b.c'}
    ${'g'}
    ${'g.h'}
    ${'g.h.i'}
    ${'g.h.j'}
    ${'g.h.k'}
    ${'l'}
    ${'m'}
    `('returns true when config file has the given property, key is $key', ({ key }: { key: string; }) => {
      const config: Config = new Config('config1', 'test');

      expect(config.has(key)).toBe(true);
    });

    it.each`
    key
    ${'a.b.c.d'}
    ${'a.b.c.d.e'}
    ${'a.b.c.d.e.f'}
    ${'g.z'}
    ${'l.m'}
    ${'l.m.n'}
    ${'n'}
    `('returns false when config file does not have the given property, key is $key', ({ key }: { key: string; }) => {
      const config: Config = new Config('config1', 'test');

      expect(config.has(key)).toBe(false);
    });
  });
});
