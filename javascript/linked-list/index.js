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
        this.counter=0;
        this.last=null;
    }
    insert(value) {
        try{
            this.counter=this.counter+1

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
        this.counter=this.counter+1
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
        this.counter=this.counter+1
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
        this.counter=this.counter+1
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
        kthFromEnd(k) {
            let currentNode = this.head;
            let secCounter = 1;
            if (k >= this.counter || k < 0) {
                return 'Exception';
            }
            while (currentNode) {
                if (secCounter == this.counter - k) {
                    return currentNode.value;
                }
                secCounter = secCounter + 1;
                currentNode = currentNode.next;
            }
        }
}
function zipLists(ll1,ll2){
    let l1 = ll1.head;
    let l2 = ll2.head;
    let ll3 = new LinkedList();
    while(l1 || l2){
        if(l1!=null){
            ll3.append(l1.value);
            l1=l1.next;
        }
      if(l2!=null){
          ll3.append(l2.value); 
          l2=l2.next; 
      }
    }
    return ll3.toString();
  }

module.exports = {LinkedList, zipLists}
