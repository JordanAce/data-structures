

// Instantiate a new graph
var Graph = function() {

  // var graph = {nodes: [node1, node2, node3], edges: {node1: [node2, node3]}};
  this.nodes = [];
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var result = false;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      result = true;
    }
  }
  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.nodes.indexOf(node);
  if (index > -1) {
    this.nodes.splice(index, 1);
  }

  var linkedNodes = this.edges[node]; // [5, 6];

  for (var i = 0; i < linkedNodes.length; i++) {
    var link = linkedNodes[i];
    for (var link in this.edges) {
      if (this.edges[link].includes(node)) {
        var edgeIndex = this.edges[link].indexOf(node);
        this.edges[link].splice(edgeIndex, 1);
      }
    }
  }
  delete this.edges[node];

  // remove edges between nodes when a node is removed
  // {nodes: [2, 1, 3], edges: {3: [2, 1]}}


};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.

// {nodes: [2, 1, 3], edges: {3: [2, 1]}}

Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  if (this.edges[fromNode].indexOf(toNode) > -1 && this.edges[toNode].indexOf(fromNode) > -1) {
    result = true;
  }
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index1 = this.edges[fromNode].indexOf(toNode);
  var index2 = this.edges[toNode].indexOf(fromNode);
  if (index1 > -1) {
    this.edges[fromNode].splice(index1, 1);
  }
  if (index2 > -1) {
    this.edges[toNode].splice(index2, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    var node = this.nodes[i];
    cb(node);
  }
};

var graph = new Graph();
/*
 .addNode = O(1)
 .contains = O(n)
 .removeNode = O(n^2)
 .hasEdge = O(1)
 .addEdge = O(1)
 .removeEdge = O(1)
 .forEachNode = O(n)
 */


