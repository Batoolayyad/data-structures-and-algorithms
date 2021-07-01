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
            if (value==undefined)
            console.error('insert a value of un undifined ',error)
        }
    }
    includes(value) {
        try{

            let current = this.head;
            if (!this.head) {
                return false;
            }
            while (current.next) {
                if (current.value == value) {
                    return true;
                }
                current = current.next;
                if ((current.next == null) && (value == current.value)) {
                    return true;
                }
            }
            return false;
        }catch(error){
            if(value==undefined)
            console.log('insert a value of undifined ',error)
        }
    }
    toString() {
        let result = '';
        let current = this.head;
        while (current.next) {
            if (current.value == null) {
                result = result + `NULL -> `;
            } else {
                result = result + `{${current.value}} -> `;
            }
            current = current.next;
            if (current.next == null) {
                result = result + `{${current.value}}`;
            }
        }
        return result;
    }
}

module.exports = LinkedList;
