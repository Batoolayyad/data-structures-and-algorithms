const Node = require('../index').Node;
const BinaryTree = require('../index').BinaryTree;
describe('find the maximum value in the tree', () => {
    let tree = new BinaryTree();
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(3);
    let node4 = new Node(4);
    let node5 = new Node(5);
    tree.root = node1;
    tree.root.left = node2;
    tree.root.right = node3;
    tree.root.left.left = node4;
    tree.root.left.right = node5;

    test('find the maximum value in the tree',()=>{
        expect(tree.findMax()).toBe(5);
    })
    test('return not found for empty tree',()=>{
        let empty = new BinaryTree();
        expect(empty.findMax()).toBe('not found');
    })
})