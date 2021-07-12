const AnimalShelter = require('../index').AnimalShelter;
describe('Queue', () => {
  let animal;
  beforeEach(() => {
    animal = new AnimalShelter();
  });
  describe('AnimalShelter', () => {
    test('dont take anything other then cat or dog', () => {
      expect(animal.enqueue('bee')).toEqual("can be either a dog or a cat object");
    });
    test('can enqueue a cat or a dog succesfully', () => {
      animal.enqueue('dog');
      expect(animal.dequeue()).toEqual("dog");
    });
    test('Can successfully enqueue multiple values into a queue', () => {
      animal.enqueue('cat');
      animal.enqueue('dog');
      expect(animal.dequeue()).toEqual("cat");
      expect(animal.dequeue()).toEqual("dog");
    });
  });
});
