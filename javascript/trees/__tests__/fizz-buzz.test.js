const Node = require('../fizz-buzz').Node;
const KaryTree = require('../fizz-buzz').KaryTree;
const fizzBuzz = require('../fizz-buzz').fizzBuzz;
describe('k-ary tree test', () => {
    let node1 = new Node(3, 4);
    let node2 = new Node(5, 2);
    let node3 = new Node(3, 3);
    let node4 = new Node(10, 4);
    let node5 = new Node(5, 1);
    let node6 = new Node(15, 3);
    let node7 = new Node(7, 2);
    let node8 = new Node(8, 2);
    let kTree = new KaryTree();
    kTree.add(node1);
    kTree.add(node2);
    kTree.add(node3);
    kTree.add(node4);
    kTree.add(node5);
    kTree.add(node6);
    kTree.add(node7);
    kTree.add(node8);
    test('instantiate and empty k-ary tree', () => {
        let karyTree = new KaryTree();
        expect(karyTree instanceof KaryTree).toBe(true);
    })
    test('can add to the tree', () => {
        expect(kTree.root.value).toBe(3);
    })
    test('can fizzBuzz the tree',()=>{
        expect((fizzBuzz(kTree))).toEqual({"value":"Fizz","childrenNum":4,"child1":{"value":"Buzz","childrenNum":2,"child1":{"value":"Fizz Buzz","childrenNum":3,"child1":{"value":null,"childrenNum":null},"child2":{"value":null,"childrenNum":null},"child3":{"value":null,"childrenNum":null}},"child2":{"value":"7","childrenNum":2,"child1":{"value":null,"childrenNum":null},"child2":{"value":null,"childrenNum":null}}},"child2":{"value":"Fizz","childrenNum":3,"child1":{"value":"8","childrenNum":2,"child1":{"value":null,"childrenNum":null},"child2":{"value":null,"childrenNum":null}},"child2":{"value":null,"childrenNum":null},"child3":{"value":null,"childrenNum":null}},"child3":{"value":"Buzz","childrenNum":4,"child1":{"value":null,"childrenNum":null},"child2":{"value":null,"childrenNum":null},"child3":{"value":null,"childrenNum":null},"child4":{"value":null,"childrenNum":null}},"child4":{"value":"Buzz","childrenNum":1,"child1":{"value":null,"childrenNum":null}}})
    })
    test('Empty tree',()=>{
        let karyTree = new KaryTree();
        expect(fizzBuzz(karyTree)).toEqual('Empty tree');
    })
})