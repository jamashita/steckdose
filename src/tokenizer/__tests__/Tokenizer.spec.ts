import { Tokenizer } from '../Tokenizer.js';

describe('Tokenizer', () => {
  describe('iterator', () => {
    it('delimits words by comma', () => {
      const str: string = '192.168.1.2';
      const delimiter: string = '.';
      const tokenizer: Tokenizer = new Tokenizer(str, delimiter);

      expect(tokenizer.count()).toBe(4);

      let i = 0;

      for (const s of tokenizer) {
        switch (i) {
          case 0: {
            expect(s).toBe('192');

            break;
          }
          case 1: {
            expect(s).toBe('168');

            break;
          }
          case 2: {
            expect(s).toBe('1');

            break;
          }
          default: {
            expect(s).toBe('2');

            break;
          }
        }

        i++;
      }
    });

    it('is not able to delimit words by semicolon', () => {
      const str: string = '192.168.1.2';
      const delimiter: string = ',';
      const tokenizer: Tokenizer = new Tokenizer(str, delimiter);

      expect(tokenizer.count()).toBe(1);

      for (const s of tokenizer) {
        expect(s).toBe(str);
      }
    });

    it('truncates empty string', () => {
      const str: string = '192...';
      const delimiter: string = '.';
      const tokenizer: Tokenizer = new Tokenizer(str, delimiter);

      expect(tokenizer.count()).toBe(1);

      for (const s of tokenizer) {
        expect(s).toBe('192');
      }
    });

    it('delimits words by 😀', () => {
      const str: string = '192😀168😀1😀2';
      const delimiter: string = '😀';
      const tokenizer: Tokenizer = new Tokenizer(str, delimiter);

      expect(tokenizer.count()).toBe(4);

      let i = 0;

      for (const s of tokenizer) {
        switch (i) {
          case 0: {
            expect(s).toBe('192');

            break;
          }
          case 1: {
            expect(s).toBe('168');

            break;
          }
          case 2: {
            expect(s).toBe('1');

            break;
          }
          default: {
            expect(s).toBe('2');

            break;
          }
        }

        i++;
      }
    });
  });
});
