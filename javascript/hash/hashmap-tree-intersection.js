
class TreeNode {
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
    
};class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    } 
  }
    
  class LinkedList { 
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    prepend(value) { 
  
      if (!value) { throw 'no value given'; }
      
      let node = new Node(value);
      node.next = this.head;
      this.head = node;
      this.size++;
    }
  
   }
   class Hashmap {
    constructor(size) {
      this.size = size;
      this.storage = new Array(size);
    }
    //key = name ==> 400
    hash(key) {
      const sumCharCode = key.split('').reduce((acc, char) => {
        return acc + char.charCodeAt(0);
      }, 0);
      const hashKey = (sumCharCode * 19) % this.size;
      return hashKey;
    }
  
    add(key, value) {
      // get an index
      const hash = this.hash(key);
      console.log('Key', hash);
      // we need to check if a value already exist in the index
      if (!this.storage[hash]) {
        const ll = new LinkedList();
        ll.prepend({ [key]: value });
        this.storage[hash] = ll; // [222] = {head:{value:{"key","value"},next:null}}
      } else {
         this.storage[hash].prepend({ [key]: value });
         return this.storage[hash].head.value[key]
      }
    }
    contains(key) {
      let hash = this.hash(key);
      if (this.storage[hash]) {
        return true;
      }else{
        return false;
      }
    }
   }
   
function twoTree(tree1, tree2) { 
    let hash = new Hashmap();
    let mySet = new Set();

    if (tree1 === undefined || tree2 === undefined) throw 'not a valid input';
    let result1='';
    let result2='';
    function inOrder(node) {
      if (node.left) inOrder(node.left);
      result1=result1+' '+ node.value
      if (node.right) inOrder(node.right);
    };
  
    inOrder(tree1.root);
    
    result2=result1;
    hash.add(result2);
    result1='';
    inOrder(tree2.root);
    hash.add(result1);
    Object.keys(hash.storage).map((key) => {
      if (hash.storage[key].size > 1) {
        let num = hash.storage[key].head.value.key;
        mySet.add(num);
      }
    });
  
    return mySet.size ? mySet : 'No Matches';
  };

module.exports = {
    twoTree,
    TreeNode,
    BinaryTree,
    LinkedList,
    Node,
    Hashmap
}