'use strict';

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(value) {
        try{

            let node = new Node(value);
            if (!this.head) {
                this.head = node;
            } else {
                node.next = this.head;
                this.head = node;
            }
        }catch(error){
            console.log('insert a value of un undifined ')
        }
    }
    includes(value) {
        try{

            let currentNode = this.head;
            if (!this.head) {
                return false;
            }
            while (currentNode.next) {
                if (currentNode.value == value) {
                    return true;
                }
                currentNode = currentNode.next;
                if ((currentNode.next == null) && (value == currentNode.value)) {
                    return true;
                }
            }
            return false;
        }catch(error){
            console.log('insert a value of undifined ')
        }
    }
    toString() {
        let result = '';
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.value == null) {
                result = result + `NULL -> `;
            } else {
                result = result + `{${currentNode.value}} -> `;
            }
            currentNode = currentNode.next;
            if (currentNode.next == null) {
                result = result + `{${currentNode.value}}`;
            }
        }
        return result;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
          this.head = node;
        } else {
          let currentNode = this.head;
          while (currentNode.next) {
            currentNode = currentNode.next;
          }
          currentNode.next = node;
        }
    }
    insertBefore(insertValue,ref){
      let node=new Node(insertValue);
      let currentNode=this.head;
      if(ref==this.head.value){
        node.next=this.head;
        this.head=node;
      }else{
      while(currentNode){
        if(currentNode.next.value==ref){
          node.next=currentNode.next;
          currentNode.next=node;
          break;
        }
        currentNode=currentNode.next;
      }
    }
  }
      insertAfter(insertValue,ref){
        let node=new Node(insertValue);
        let currentNode=this.head;
        while(currentNode){
          if(currentNode.value==ref){
            node.next=currentNode.next;
            currentNode.next=node;
            break;
          }
          currentNode=currentNode.next;
        }
    }
}

module.exports = LinkedList;
