const PseudoQueue = require('../index').PseudoQueue;
describe('Queue', () => {
  let pseudoQueue;
  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });
  describe('enqueue', () => {
    test('Can successfully enqueue into a queue', () => {
      pseudoQueue.enqueue("a");
      expect(pseudoQueue.stack1.top.value).toEqual("a");
    });
  });
  describe('enqueue', () => {
    test('Can successfully enqueue multiple values into a queue', () => {
      pseudoQueue.enqueue("a");
      pseudoQueue.enqueue("b");
      expect(pseudoQueue.stack1.top.value).toEqual("a");
    });
  });
  describe('dequeue', () => {
    test('Can successfully dequeue out of a queue the expected value', () => {
      pseudoQueue.enqueue("a");
      pseudoQueue.enqueue("b");
      expect(pseudoQueue.dequeue()).toEqual("a");
      expect(pseudoQueue.dequeue()).toEqual("b");
      expect(pseudoQueue.dequeue()).toEqual("exception");
    });
  });
});