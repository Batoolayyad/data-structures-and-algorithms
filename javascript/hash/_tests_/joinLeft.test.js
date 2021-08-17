const Hashmap= require('../joinLeft').Hashmap;
const node= require('../joinLeft').Node;
const LinkedList= require('../joinLeft').LinkedList;
const leftJoin= require('../joinLeft').leftJoin;


let firstTable = new Hashmap(50);
let secTable = new Hashmap(50);

firstTable.add('Batool', '25');
firstTable.add('Baraa', '26');
firstTable.add('Amro', '29');
firstTable.add('Yazan', '25');
firstTable.add('Saeed', '25');

secTable.add('Batool', '25');
secTable.add('Sokyna', '26');
secTable.add('Amro', '29');
secTable.add('yazan', '25');
secTable.add('fatema', '25');


describe('leftJoin', () => {

  it('join two hashmaps into a single data structure', () => {

    expect(leftJoin(firstTable, secTable)).toEqual([
        ['Amro', '29', '29'],
        ['Saeed', '25', null],
        ['Baraa', '26', null],
        ['Yazan', '25', null],
        ['Batool', '25', '25'],
    ]);
  });

  it('return values for each key if they are equal', () => {

    expect(leftJoin(firstTable, firstTable)).toEqual([
        ['Amro', '29', '29'],
        ['Saeed', '25', '25'],
        ['Baraa', '26', '26'],
        ['Yazan', '25', '25'],
        ['Batool', '25', '25'],
    ]);
  });

  it('if the keys for first table deferent then then the sec return null for all values in the sec table', () => {
      
    let fTable = new Hashmap(50);
    let sTabl = new Hashmap(50);

    fTable.add('Batool', '25');
    fTable.add('Baraa', '26');
    fTable.add('Amro', '29');
    fTable.add('Yazan', '25');
    fTable.add('Saeed', '25');

    sTabl.add('Mohanad', '25');
    sTabl.add('Sokyna', '26');
    sTabl.add('Ugur', '29');
    sTabl.add('Esraa', '25');
    sTabl.add('Dana', '25');
    
    expect(leftJoin(fTable, sTabl)).toEqual([
        ['Amro', '29', null],
        ['Saeed', '25', null],
        ['Baraa', '26', null],
        ['Yazan', '25', null],
        ['Batool', '25', null],
    ]);
  });
});