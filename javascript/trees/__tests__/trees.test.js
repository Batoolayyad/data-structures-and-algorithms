
const Node = require('../index').Node;
const BinaryTree = require('../index').BinaryTree;
const BinarySearchTree = require('../index').BinarySearchTree;
const treeIn= require('../index').treeIn;


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
});


describe('Trees Intersection', () => {

    test('get the nodes that has the same valuse in the two trees', () => {

        let root1 = new BinarySearchTree();
        let root2 = new BinarySearchTree();

        root1.add(0);
        root1.add(1);
        root1.add(2);
        root1.add(3);
        root1.add(4);
        root1.add(5);
    
        root2.add(0);
        root2.add(3);
        root2.add(4);
        root2.add(5);
        root2.add(2);
        root2.add(10);

        expect(treeIn(root1, root2)).toEqual([0, 2, 3, 4, 5]);
    })

    
    test('get all the nodes values when both trees are the same', () => {

        let root1 = new BinarySearchTree();
        let root2 = new BinarySearchTree();

        root1.add(0);
        root1.add(1);
        root1.add(2);
        root1.add(3);
        root1.add(4);
        
        root2.add(0);
        root2.add(1);
        root2.add(2);
        root2.add(3);
        root2.add(4);
       
        expect(treeIn(root1, root2)).toEqual([0, 1, 2, 3, 4]);
    })


    test('return empty array when there is no intersection', () => {

        let root1 = new BinarySearchTree();
        let root2 = new BinarySearchTree();

        root1.add(0);
        root1.add(1);
        root1.add(2);
        root1.add(3);
        root1.add(4);
        
        root2.add(5);
        root2.add(6);
        root2.add(7);
        root2.add(8);
        root2.add(9);
        
        expect(treeIn(root1, root2)).toEqual([]);
    })
})