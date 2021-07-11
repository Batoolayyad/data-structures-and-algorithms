'use strict';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        
        this.top=null;
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
    constructor(){
        this.top=null;
        this.last=null;
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
class PseudoQueue{
    constructor()
    {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    enqueue(value){
        while (this.stack1.top){
            this.stack2.push(this.stack1.pop());
        }
        this.stack1.push(value);
        while (this.stack2.top){
            this.stack1.push(this.stack2.pop());
       }
    }
    dequeue(){
        if (!this.stack1.top){
            return "exception";
        }
        return this.stack1.pop();
    }
}
module.exports={
    Stack,
    Queue,
    PseudoQueue,
}