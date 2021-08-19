'use strict';

class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex,
            this.weight = weight;
    }
}

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    //add node
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }

    // add edge
    addEdge(startVertex, endVertex, weight = 0) {
        if (!this.adjacencyList.has(startVertex)) {
            throw new Error('Invalid vertex');
        }

        const addVertex = this.adjacencyList.get(startVertex);
        addVertex.push(new Edge(endVertex, weight));
    }

    // get nodes
    getAll() {
        let Keys = this.adjacencyList.keys();
        for (let i of Keys) {
            let getVal = this.adjacencyList.get(i);
            let str = '';
            for (let j of getVal) {

                str += j + ' ';
            }
            return (i + " -> " + str)
        }
    }

    //get neighbors
    getNeighbors(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            throw new Error('no neighbors');
        }
        return [...this.adjacencyList.get(vertex)];
    }




    size(vertex) {
        const queue = [];
        const visited = new Set();

        queue.unshift(vertex);
        visited.add(vertex);

        while (queue.length) {
            const currentVertex = queue.pop();
            const neighbors = this.getNeighbors(currentVertex); //gives an array of all neighbors

            for (let neighbor of neighbors) { // each neighbor is an edge
                const neighborVertex = neighbor.vertex;

                if (visited.has(neighborVertex)) { //if we have already visited skip
                    continue;
                } else { // if not add to visited list, and queue it up
                    visited.add(neighborVertex);
                    queue.unshift(neighborVertex);
                }
            }
        }
        return visited.size;
    }
}

module.exports = {
    Vertex,
    Edge,
    Graph
}