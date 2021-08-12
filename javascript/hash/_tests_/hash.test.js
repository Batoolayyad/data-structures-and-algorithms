const Hashmap= require('../hash').Hashmap;
const node= require('../hash').Node;
const LinkedList= require('../hash').LinkedList;

describe('Hashmap tests',()=>{
    let newHash= new Hashmap(4000);

    it('Adding a key/value to your hashtable results in the value being in the data structure',()=>{
        newHash.add('batool','500');
        expect(newHash.storage[newHash.hash('batool')]).toBeDefined();
    });

    
    it('Retrieving based on a key returns the value stored', ()=>{
        expect(newHash.get('batool')).toEqual(['500']);
    });


    it('Successfully returns null for a key that does not exist in the hashtable',()=>{
        expect(newHash.get('notExist')).toBe(null);
    });


    it('Successfully handle a collision within the hashtable',()=>{
        expect(newHash.add('batool','200')).toEqual('200');
    });



    it('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
        newHash.add('tabool','200');
        expect(newHash.get('tabool')).toEqual(['200']);
    });


    it('Successfully hash a key to an in-range value',()=>{
        expect(newHash.hash('inRange')).toBe(1452)
    });

    
});