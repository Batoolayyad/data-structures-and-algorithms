const Hashmap = require('../hashmap-tree-intersection');
const Node= require('../hashmap-tree-intersection');
const BinaryTree = require('../hashmap-tree-intersection').BinaryTree
const TreeNode = require('../hashmap-tree-intersection').TreeNode
const twoTree = require('../hashmap-tree-intersection').twoTree

describe('tree intersection', () => {

  it('when given no inputs, expect to throw', () => {
    expect(() => twoTree()).toThrow();
  });

  it('when given two binary and no matches, will return no matches', () => {
    let tree1 = new BinaryTree();
    let node1 = new TreeNode(100);
    let node2 = new TreeNode(200);
    let node3 = new TreeNode(300);
    let node4 = new TreeNode(400);
    let node5 = new TreeNode(500);
    
    tree1.root=node1
    tree1.root.left = node2;
    tree1.root.right = node3;
    tree1.root.right.right = node4;
    tree1.root.right.right.right = node5;
    
    let tree2 = new BinaryTree();
    let node6 = new TreeNode(600);
    let node7 = new TreeNode(700);
    let node8 = new TreeNode(800);
    let node9 = new TreeNode(900);
    let node10 = new TreeNode(1000);

    tree2.root=node6
    tree2.root.left = node7;
    tree2.root.right = node8;
    tree2.root.left.right = node9;
    tree2.root.right.right= node10;

    let value = twoTree(tree1, tree2);

    expect(value).toBe('No Matches');
  });

  it('when given two binary tree arguments, will return matches', () => {
    
    let tree1 = new BinaryTree();
    
    let node1 = new TreeNode(100);
    let node2 = new TreeNode(200);
    let node3 = new TreeNode(300);
    let node4 = new TreeNode(400);
    let node5 = new TreeNode(500);

    tree1.root=node1
    tree1.root.left = node2;
    tree1.root.right = node3;
    tree1.root.left.left = node4;
    tree1.root.right.right = node5;

    
    let tree2 = new BinaryTree();
    let node6 = new TreeNode(100);
    let node7 = new TreeNode(200);
    let node8 = new TreeNode(600);
    let node9 = new TreeNode(700);
    let node10 = new TreeNode(800);

    tree2.root=node6
    tree2.root.left = node7;
    tree2.root.right = node8;
    tree2.root.left.right = node9;
    tree2.root.right.right= node10;

    let value = twoTree(tree1, tree2);

    expect(value).toContain('yellow', 'DOG');
  });
});