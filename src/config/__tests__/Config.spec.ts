import { Config } from '../Config.js';
import { ConfigError } from '../ConfigError.js';

describe('Config', () => {
  describe('get', () => {
    it('load test.json when json file exists, json is prioritised', () => {
      const config: Config = new Config('config1', 'test');

      expect(config.get('a')).toEqual({
        b: {
          c: [
            'd',
            'e',
            'f'
          ]
        }
      });
      expect(config.get('a.b')).toEqual({
        c: [
          'd',
          'e',
          'f'
        ]
      });
      expect(config.get('a.b.c')).toEqual([
        'd',
        'e',
        'f'
      ]);
      expect(config.get('g')).toEqual({
        h: {
          i: null,
          j: 961,
          k: 'R4Q'
        }
      });
      expect(config.get('g.h')).toEqual({
        i: null,
        j: 961,
        k: 'R4Q'
      });
      expect(config.get('g.h.i')).toBe(null);
      expect(config.get('g.h.j')).toBe(961);
      expect(config.get('g.h.k')).toBe('R4Q');
      expect(config.get('l')).toBe(128.2);
      expect(config.get('m')).toBe(null);
    });

    it('load test.yml when json file does not exist, yml is prioritised', () => {
      const config: Config = new Config('config2', 'test');

      expect(config.get('a')).toEqual({
        b: {
          c: 1,
          d: {
            e: 'f'
          }
        }
      });
      expect(config.get('a.b')).toEqual({
        c: 1,
        d: {
          e: 'f'
        }
      });
      expect(config.get('a.b.c')).toBe(1);
      expect(config.get('a.b.d')).toEqual({
        e: 'f'
      });
      expect(config.get('a.b.d.e')).toBe('f');
      expect(config.get('g')).toEqual({
        h: 'i',
        j: null,
        k: 'XK7bN'
      });
      expect(config.get('g.h')).toBe('i');
      expect(config.get('g.j')).toBe(null);
      expect(config.get('g.k')).toBe('XK7bN');
      expect(config.get('l')).toEqual({
        m: 788.64
      });
      expect(config.get('l.m')).toBe(788.64);
    });

    it('load test.yaml when json and yml file does not exist, yaml is prioritised', () => {
      const config: Config = new Config('config3', 'test');

      expect(config.get('a')).toEqual({
        b: {
          c: 1,
          d: {
            e: 'f'
          }
        }
      });
      expect(config.get('a.b')).toEqual({
        c: 1,
        d: {
          e: 'f'
        }
      });
      expect(config.get('a.b.c')).toBe(1);
      expect(config.get('a.b.d')).toEqual({
        e: 'f'
      });
      expect(config.get('a.b.d.e')).toBe('f');
      expect(config.get('g')).toEqual({
        h: 'i',
        j: null,
        k: 'XK7bN'
      });
      expect(config.get('g.h')).toBe('i');
      expect(config.get('g.j')).toBe(null);
      expect(config.get('g.k')).toBe('XK7bN');
      expect(config.get('l')).toEqual({
        m: 788.64
      });
      expect(config.get('l.m')).toBe(788.64);
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

    it('throws ConfigError when config file does not have the given property', () => {
      const config: Config = new Config('config1', 'test');

      expect(() => {
        config.get('a.b.c.d');
      }).toThrow(ConfigError);
      expect(() => {
        config.get('a.b.c.d.e');
      }).toThrow(ConfigError);
      expect(() => {
        config.get('a.b.c.d.e.f');
      }).toThrow(ConfigError);
      expect(() => {
        config.get('g.z');
      }).toThrow(ConfigError);
      expect(() => {
        config.get('l.m');
      }).toThrow(ConfigError);
      expect(() => {
        config.get('l.m.n');
      }).toThrow(ConfigError);
      expect(() => {
        config.get('n');
      }).toThrow(ConfigError);
    });
  });
});
