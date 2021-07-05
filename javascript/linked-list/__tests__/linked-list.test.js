'use strict';
// Require our linked list implementation
const LinkedLilst = require('../index');
describe('checks if it includes a value',()=>{
  test('Can successfully instantiate an empty linked list',()=>{
    const ll = new LinkedLilst();
    expect(ll.head).toBe(null);
    ll.insert('*');
    expect(ll.head.value).toBe('*');
  })
  test('Can properly insert into the linked list',()=>{
    const ll = new LinkedLilst();
    expect(ll.head).toBe(null);
    ll.insert('*');
    expect(ll.head.value).toBe('*');
    ll.insert('a');
    ll.insert('b');
    ll.insert('c'); 
  })
  test('Will return true when finding a value within the linked list that exists',()=>{
    const ll = new LinkedLilst();
    ll.insert('a');
    ll.insert('b');
    ll.insert('c');
    expect(ll.includes('b')).toBe(true);
  })
  test('Will return false when searching for a value in the linked list that does not exist',()=>{
    const ll = new LinkedLilst();
    ll.insert('a');
    ll.insert('b');
    ll.insert('c');
    expect(ll.includes('d')).toBe(false);
  })
  test('Can properly return a collection of all the values that exist in the linked list',()=>{
    const ll = new LinkedLilst();
    ll.insert('b');
    ll.insert(null);
    ll.insert('a');
    expect(ll.toString()).toBe('{a} -> NULL -> {b}');
  })


  test('Can successfully add a node to the end of the linked list',()=>{
    const ll = new LinkedLilst();
    ll.append('a');
    ll.append('*');
    expect(ll.head.next.value).toBe('*');
  });
  test('Can successfully add multiple nodes to the end of a linked list',()=>{
    const ll = new LinkedLilst();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.append('d');
    expect(ll.head.next.next.next.value).toBe('d');
  });
  test('Can successfully insert a node before a node located i the middle of a linked list',()=>{
    const ll = new LinkedLilst();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.append('d');
    ll.insertBefore('*','c');
    expect(ll.head.next.next.value).toBe('*');
  })
  test('Can successfully insert a node before the first node of a linked list',()=>{
    const ll = new LinkedLilst();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.append('d');
    ll.insertBefore('*','a');
    expect(ll.head.value).toBe('*');
  })
  test('Can successfully insert after a node in the middle of the linked list',()=>{
    const ll = new LinkedLilst();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.append('d');
    ll.insertAfter('*','c');
    expect(ll.head.next.next.next.value).toBe('*');
  })
  test('Can successfully insert a node after the last node of the linked list',()=>{
    const ll = new LinkedLilst();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.append('d');
    ll.insertAfter('*','d');
    expect(ll.head.next.next.next.next.value).toBe('*');
  })
  test('Where k is greater than the length of the linked list', () => {
    const ll = new LinkedLilst();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.append('d');
    ll.insertAfter('*', 'd');
    expect(ll.kthFromEnd(10)).toBe('Exception');
  })
  test('Where k and the length of the list are the same', () => {
    const ll = new LinkedLilst();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.append('d');
    ll.insertAfter('*', 'd');
    expect(ll.kthFromEnd(5)).toBe('Exception');
  })
  test('Where k is not a positive integer', () => {
    const ll = new LinkedLilst();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.append('d');
    ll.insertAfter('*', 'd');
    expect(ll.kthFromEnd(-1)).toBe('Exception');
  })
  test('Where the linked list is of a size 1', () => {
    const ll = new LinkedLilst();
    ll.append('*');
    expect(ll.kthFromEnd(0)).toBe('*');
  });
  test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    const ll = new LinkedLilst();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.append('d');
    expect(ll.kthFromEnd(2)).toBe('b');
  });
});


//