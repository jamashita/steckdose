import { ObjectLiteral } from '@jamashita/anden-type';
import { JSONAError } from '../Error/JSONAError';
import { JSONA } from '../JSONA';

describe('JSONA', () => {
  describe('parse', () => {
    it('outputs the same one as JSON.parse()', async () => {
      expect.assertions(1);

      const str: string =
        '{"glossary":{"title":"example glossary","glossDiv":{"title":"S","glossList":{"glossEntry":{"ID":"SGML","sortAs":"SGML","glossTerm":"Standard Generalized Markup Language","acronym":"SGML","abbrev":"ISO 8879:1986","glossDef":{"para":"A meta-markup language, used to create markup languages such as DocBook.","glossSeeAlso":["GML","XML"]},"glossSee":"markup"}}}}}';

      expect(await JSONA.parse<ObjectLiteral>(str)).toStrictEqual(JSON.parse(str));
    });

    it('throws SyntaxError when the JSON is mal format, but the Error is wrapped', async () => {
      expect.assertions(1);

      const str: string = '{"we":"you"';

      await expect(JSONA.parse<ObjectLiteral>(str)).rejects.toThrow(JSONAError);
    });
  });

  describe('stringify', () => {
    it('outputs the same object as JSON.stringify()', async () => {
      expect.assertions(1);

      const obj: ObjectLiteral = {
        glossary: {
          title: 'example glossary',
          glossDiv: {
            title: 'S',
            glossList: {
              glossEntry: {
                ID: 'SGML',
                sortAs: 'SGML',
                glossTerm: 'Standard Generalized Markup Language',
                acronym: 'SGML',
                abbrev: 'ISO 8879:1986',
                glossDef: {
                  para: 'A meta-markup language, used to create markup languages such as DocBook.',
                  glossSeeAlso: ['GML', 'XML']
                },
                glossSee: 'markup'
              }
            }
          }
        }
      };

      expect(await JSONA.stringify(obj)).toBe(JSON.stringify(obj));
    });

    it('throws TypeError when the JSON has circular reference, but the Error is wrapped', async () => {
      expect.assertions(1);

      const obj1: ObjectLiteral = {};
      obj1['obj2'] = { obj1 };

      await expect(JSONA.stringify(obj1)).rejects.toThrow(JSONAError);
    });
  });
});
