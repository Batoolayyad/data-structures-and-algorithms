'use strict';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(linkedList) {
        this.size = linkedList;
        this.top=this.size.head;
    }
    push(value) {
        try {
            if (value == undefined) {
                throw new Error('value of undefined');
            }
            let newNode = new Node(value);
            if (!this.top) {
                this.top = newNode;
            } else {
                newNode.next = this.top;
                this.top = newNode;
            }
        } catch (e) {
            console.error(e);
        }
    }
    pop() {
        try {
            if (!this.top) {
                throw new Error('exception');
            }
            let temp=this.top;
            this.top=temp.next;
            temp.next=null;
            return temp.value;      
        } catch (e) {
            return e.message;
        }
    }
    peek() {
        if (!this.top) {
            try {
                throw new Error('exception');
            } catch (e) {
                return e.message;
            }
        }
        return this.top.value;
    }
    isEmpty(){
        if (!this.top) {
            return true;
        }else{
            return false;
        }  
    }
}


class Queue{
    constructor(LinkedList){
        this.size=LinkedList;
        this.top=this.size.head;
        this.last=this.size.last;
    }
    enqueue(value) {
        try {
            let newNode = new Node(value);
            if (!this.top) {
                this.top = newNode;
                this.last=newNode;
            }else{
                this.last.next=newNode;
                this.last=newNode;
            }
        } catch (e) {
            console.error(e);
        }
    }
    dequeue(){
        try {
            if (!this.top) {
                throw new Error('exception');
            }
            let temp=this.top;
            this.top=temp.next;
            temp.next=null;
            return temp.value;      
        } catch (e) {
            return e.message;
        }
    }
    peek() {
        if (!this.top) {
            try {
                throw new Error('exception');
            } catch (e) {
                return e.message;
            }
        }
        return this.top.value;
    }
    isEmpty(){
        if (!this.top) {
            return true;
        }else{
            return false;
        }  
    }
}
module.exports={
    Stack,
    Queue,
}
//