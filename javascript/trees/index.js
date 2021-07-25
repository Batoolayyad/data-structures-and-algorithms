class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
class BinaryTree {
  constructor(root) {
    this.root = null;
  }

  inOrder() {
    const result = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      result.push(node.value);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return result;
  }

  preOrder() {
    const result = [];
    const _traverse = (node) => {
      result.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return result;
  }
  postOrder() {
    const result = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      result.push(node.value);
    };
    _traverse(this.root);
    return result;
  }

  findMax(){
    if(!this.root){
      return 'not found'
    }
    let maxValue=this.root.value;
    const _traverse =(node)=>{
      if(node.value>=maxValue){
        maxValue = node.value
      }
      if(node.left) _traverse(node.left);
      if(node.right)_traverse(node.right);
    }
    _traverse(this.root);
    return maxValue;
  }
}
class BinarySearchTree extends BinaryTree{
  constructor(root){
    super(root);
  }
  add(value){
    let node = new Node(value);
     let curr = this.root;
    const _add=(node)=>{
      if(!this.root){
        this.root=node;
        return node;
      }else if(node.value>curr.value){
          if(curr.right){
          curr=curr.right;
          _add(node)
          }else{
curr.right=node;
          }
      }else if(node.value<curr.value){
          if(curr.left){
          curr=curr.left;
          _add(node)
          }else{
curr.left=node; 
          }
      }
    }
    _add(node);
  }

search(value){
 let newResult= tree.inOrder()
 if(newResult.includes(value)){
   return true;
 }
 else{
   return false
 }

  }


}


module.exports={
  BinaryTree,
  BinarySearchTree,
  Node,
}