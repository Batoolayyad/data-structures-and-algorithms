'use strict';

let graph = require('../index');


describe('Graphs', () => {

  it('Node can be successfully added to the graph', () => {
    let newGraph= new graph.Graph();
    let one = new graph.Vertex('one');
    newGraph.addVertex(one);
    expect(newGraph.adjacencyList.get(one)).toEqual([]);
  });

  it('An edge can be successfully added to the graph', () => {
    let newGraph = new graph.Graph();
    let one = new graph.Vertex('one');
    let two = new graph.Vertex('two');
    let three = new graph.Vertex('three')
    
    newGraph.addVertex(one);
    newGraph.addVertex(two);
    newGraph.addVertex(three);
    
    newGraph.addEdge(one, two);
    newGraph.addEdge(two, three);

    let edgeValue = newGraph.adjacencyList.get(one);
    expect(edgeValue).toEqual([{ 'vertex': { 'value': 'two' }, 'weight': 0 }]);
    let edgeValue1 = newGraph.adjacencyList.get(two);
    expect(edgeValue1).toEqual([{ 'vertex': { 'value': 'three' }, 'weight': 0 }]);
  });

  it('A collection of all vertices can be properly retrieved from the graph', () => {
    let newGraph = new graph.Graph();
    let one = new graph.Vertex('one');
    let two = new graph.Vertex('two');

    newGraph.addVertex(one);
    newGraph.addVertex(two);
    
    newGraph.addEdge(one, two);
    newGraph.addEdge(two, one);
    
    let value1 = newGraph.adjacencyList.get(one);
    let value2 = newGraph.adjacencyList.get(two);

    expect(value1).toEqual([{ 'vertex': { 'value': 'two' }, 'weight': 0 }]);
    expect(value2).toEqual([{ 'vertex': { 'value': 'one' }, 'weight': 0 }]);
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    
    let newGraph = new graph.Graph();
    let one = new graph.Vertex('one');
    let two = new graph.Vertex('two');
    let three = new graph.Vertex('three');
    
    newGraph.addVertex(one);
    newGraph.addVertex(two);
    newGraph.addVertex(three);
    newGraph.addEdge(one, two);
    newGraph.addEdge(one, three);

    let value = newGraph.getNeighbors(one);

    expect(value).toEqual([
            { 'vertex': { 'value': 'two' }, 'weight': 0 }, 
            { 'vertex': { 'value': 'three' }, 'weight': 0 }
          ]);
    });

  it('Neighbors are returned with the weight between nodes included', () => {
    let newGraph = new graph.Graph();
    let one = new graph.Vertex('one');
    let two = new graph.Vertex('two');
    let three = new graph.Vertex('three');
    newGraph.addVertex(one);
    newGraph.addVertex(two);
    newGraph.addVertex(three);
    newGraph.addEdge(one, two);
    newGraph.addEdge(one, three);
    let value = newGraph.getNeighbors(one);
    let weight1 = value[0]['weight'];
    let weight2 = value[1]['weight'];

    expect(weight1).toEqual(0);
    expect(weight2).toEqual(0);
  });

  it('The proper size is returned, representing the number of nodes in the graph', () => {
    let newGraph = new graph.Graph();
    let one = new graph.Vertex('one');
    let two = new graph.Vertex('two');
    let three = new graph.Vertex('three');
    
    newGraph.addVertex(one);
    newGraph.addVertex(two);
    newGraph.addVertex(three);

    newGraph.addEdge(one, two);
    newGraph.addEdge(two, three);
    
    expect(newGraph.size(one)).toEqual(3);
  });

  it('A graph with only one node and edge can be properly returned', () => {
    let newGraph = new graph.Graph();
    let one = new graph.Vertex('one');
    newGraph.addVertex(one);
    newGraph.addEdge(one);
    let value = newGraph.adjacencyList.get(one);


    expect(value).toEqual([{ 'vertex': undefined, 'weight': 0 }]);
  });

  it('An empty graph properly returns null', () => {
    let newGraph = new graph.Graph();
    let value = newGraph.adjacencyList.values();
    // let expectedValue = { };
    // console.log(test.adjacencyList.values());

    expect(value).not.toBeUndefined();
  });
});