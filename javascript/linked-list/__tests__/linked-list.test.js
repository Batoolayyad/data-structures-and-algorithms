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
});
