
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    prepend(value) {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
    }
    value(key){
        let node = this.head;
        let value=[];
        while(node){
          if(Object.keys(node.value).includes(key)){
            value.push(node.value[key]);
          }
          node=node.next;
          }
          return value;
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
  
    get(key) {
      let hash= this.hash(key);
      if (this.storage[hash]){
          return this.storage[hash].value(key);
      }else{
          return null
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

function repeatedword(str){

  let hashmap = new Hashmap(4000);
  let key = str.toLowerCase().split(',').join('').split(' ');
  
  for(let i=0;i<key.length;i++){
    if(hashmap.contains(key[i])){
        return key[i];
    }else{
        hashmap.add(key[i]);
         }
    }
    return null;
 }


 
  module.exports={
      Node,
      LinkedList,
      Hashmap,
      repeatedword
  }