//edge list
// const graph2 = [
//   [0, 2],
//   [2, 3],
//   [2, 1],
//   [1, 3],
// ];

//adjecency List
//const graph1 = [[2], [2, 3], [0, 1, 3], [1, 2]];

//Adjecent matrix
//const graph3 = [];

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjencyList = {};
  }
  addVertex(node) {
    this.adjencyList[node] = [];
    this.numberOfNodes++;
  }
  addVertex(node1, node2) {
    this.adjencyList[node1].push(node2);
    this.adjencyList[node2].push(node1);
  }
}

const graph = new Graph();
