// const BinaryTree = require('../index').BinaryTree;
// const Node = require('../index').Node;
//  const BinarySearchTree=require('../index').BinarySearchTree

// describe('Binary Tree', () => {
//   let tree;
//   beforeAll(() => {
    // const one = new Node(1);
    // const two = new Node(2);
    // const three = new Node(3);
    // const four = new Node(4);
    // const five = new Node(5);
    // const six = new Node(6);
    // const seven = new Node(7);
    // const eight = new Node(8);
    // const nine = new Node(9);
    // one.left = two;
    // one.right = three;
    // two.left = six;
    // three.left = four;
    // three.right = five;
    // six.right = seven;
    // seven.left = eight;
    // seven.right = nine;
    // tree = new BinaryTree(one);
//  tree = new BinarySearchTree();
// tree.add(10);
//  tree.add(15);
//  tree.add(5);
//  tree.add(7);
//  tree.add(20);
//  tree.add(13);
//  tree.add(12);
//  tree.add(3);
//  tree.add(1);
//  tree.inOrder();
// JSON.Stringify(tree)

// tree.search(12)

//   });
  // root - left - right
//   it('Can successfully instantiate an empty tree', () => {
    // let expectedArr = [1, 3, 5, 7, 10, 12, 13, 15, 20];
//     tree = new BinarySearchTree();
// tree.add(10);
//     let  expectedArr=[10]
//     expect(tree.inOrder()).toEqual(expectedArr);
//   });
//   it('Can successfully instantiate an empty tree', () => {
//     // let expectedArr = [1, 3, 5, 7, 10, 12, 13, 15, 20];
//     tree = new BinarySearchTree();
// tree.add(10);
//     let  expectedArr=[10]
//     expect(tree.inOrder()).toEqual(expectedArr);
//   });
//   it('Can successfully instantiate a tree with a single root node', () => {
    // let expectedArr = [1, 3, 5, 7, 10, 12, 13, 15, 20];
//      const one = new Node(10);
//     tree = new BinarySearchTree();
// tree.add(15);
//     let expectedArr=[10,15]
//     expect(tree.inOrder()).toEqual(expectedArr);
//   });
  // left - root - right
//   it('inorder', () => {
//     let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
//     expect(tree.inOrder()).toEqual(expected);
//   });
  // left - right -root
//   it('postorder', () => {
//     let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
//     expect(tree.postOrder()).toEqual(expected);
//   });
// });


const Node = require('../index').Node;
const BinaryTree = require('../index').BinaryTree;
 const BinarySearchTree = require('../index').BinarySearchTree;
describe('Binary Tree',()=>{
    test('Can successfully instantiate an empty tree',()=>{
        let tree = new BinaryTree();
        expect(tree instanceof BinaryTree).toBe(true);
    })
    test('Can successfully instantiate a tree with a single root node',()=>{
        let tree = new BinaryTree();
        let first = new Node(1);
        tree.root=first;
        expect(tree.root.value).toBe(1);
        expect(tree.root.right).toBe(null);
        expect(tree.root.left).toBe(null);
    })
    test('Can successfully add a left child and right child to a single root node',()=>{
        let tree = new BinarySearchTree();
        tree.add(8);
        tree.add(7);
        tree.add(13);
        expect(tree.root.value).toBe(8);
        expect(tree.root.right.value).toBe(13);
        expect(tree.root.left.value).toBe(7);
    })
    test('Can successfully return a collection from a preorder traversal',()=>{
        let tree = new BinarySearchTree();
        tree.add(20);
        tree.add(2);
        tree.add(9);
        tree.add(12);
        tree.add(10);
        tree.add(5);
        tree.add(7);
        expect(tree.postOrder()).toEqual([7,5,10,12,9,2,20]);
        expect(tree.preOrder()).toEqual([20,2,9,5,7,12,10]);
        expect(tree.inOrder()).toEqual([2,5,7,9,10,12,20]);
    })
    test('Can successfully return a collection from a inorder traversal',()=>{
        let tree = new BinarySearchTree();
        tree.add(20);
        tree.add(7);
        tree.add(9);
        tree.add(13);
        tree.add(33);
        expect(tree.inOrder()).toEqual([7,9,13,20,33]);
    })
    test('Can successfully return a collection from a postorder traversal',()=>{
        let tree = new BinarySearchTree();
        tree.add(20);
        tree.add(7);
        tree.add(9);
        tree.add(13);
        tree.add(33);
        expect(tree.postOrder()).toEqual([13,9,7,33,20]);
    })
})