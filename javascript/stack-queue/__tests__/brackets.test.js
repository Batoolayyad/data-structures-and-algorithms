const Stack = require('../index').Stack;
const validaterBrackets = require('../index').validaterBrackets;
describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  describe('Brackets Validation', () => {
    test('if one of the  opine or close tages are missing ', () => {
        expect(validaterBrackets('{')).toEqual(false);
      });
    test('if bracts are Matching', () => {
      expect(validaterBrackets('{()}')).toEqual(true);
    });
    test('if bracts are not Matching', () => {
        expect(validaterBrackets('{)')).toEqual(false);
      });
    test('if the brackets are holding a text ', () => {
      expect(validaterBrackets('[Hello world]')).toEqual(true);
    });
  });
});