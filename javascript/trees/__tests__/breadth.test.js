const BinaryTree = require('../index').BinaryTree;
const breadthFirst = require('../index').breadthFirst;
const Node = require('../index').Node;

describe('list of all values in the tree, in the order they were encountered', () => {
    let tree = new BinaryTree();
    let emptyTree = new BinaryTree(); 
    
    
    // [2,7,5,2,6,9,5,11,4] 
    let node1 = new Node(2);
    let node2 = new Node(7);
    let node3 = new Node(5);
    let node4 = new Node(2);
    let node5 = new Node(6);
    let node6 = new Node(9);
    let node7 = new Node(5);
    let node8 = new Node(11);
    let node9 = new Node(4);
    
    tree.root = node1;
    tree.root.left = node2;
    tree.root.right = node3;
    tree.root.left.left = node4;
    tree.root.left.right = node5;
    tree.root.right.left = node6;
    tree.root.right.right = node7;
    tree.root.right.right.left = node8;
    tree.root.right.right.right = node9;
    
    test('“Happy Path” - Expected outcome', () => {
        expect(breadthFirst(tree)).toEqual([2,7,5,2,6,9,5,11,4]);
    });
    test('Expected failure', () => {
        expect(breadthFirst(emptyTree)).toEqual('the tree is empty');
    });
})