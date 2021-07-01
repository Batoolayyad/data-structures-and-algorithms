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
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    includes(value) {
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
