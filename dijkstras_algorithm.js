/*
Каков вес кратчайшего пути от начала до конца в графе на рис.А Упражнения 7.1 из 
книги А.Бхаргава "Грокаем алгоритмы"
*/
'use strict';

// the graph
const graph = {};
graph["start"] = {};
graph["start"]["a"] = 5;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["c"] = 4;
graph["a"]["d"] = 2;

graph["b"] = {};
graph["b"]["a"] = 8;
graph["b"]["d"] = 7;

graph["c"] = {};
graph["c"]["d"] = 6;
graph["c"]["fin"] = 3;

graph["d"] = {};
graph["d"]["fin"] = 1;

graph["fin"] = {};

// The costs table
const costs = {};
costs['a'] = 5;
costs['b'] = 2;
costs['c'] = Infinity;
costs['d'] = Infinity;
costs['fin'] = Infinity;

// the parents table
const parents = {};
parents['a'] = 'start';
parents['b'] = 'start';
parents['c'] = null;
parents['d'] = null;
parents['fin'] = null;

let processed = [];


function find_lowest_cost_node(costs) {
  let lowest_cost = Infinity;
  let lowest_cost_node = null;

  // Go through each node
  for (let node in costs) {
    let cost = costs[node];
    // If it's the lowest cost so far and hasn't been processed yet...
    if (cost < lowest_cost && (processed.indexOf(node) === -1)) {
      // ... set it as the new lowest-cost node.
      lowest_cost = cost;
      lowest_cost_node = node;
    }
  }
  return lowest_cost_node;
}

let node = find_lowest_cost_node(costs);

while (node !== null) {
  let cost = costs[node];
  // Go through all the neighbors of this node
  let neighbors = graph[node];
  console.log(node, cost, neighbors);
  Object.keys(neighbors).forEach(function(n) {
    let new_cost = cost + neighbors[n];
    // If it's cheaper to get to this neighbor by going through this node
    if (costs[n] > new_cost) {
      // ... update the cost for this node
      costs[n] = new_cost;
      // This node becomes the new parent for this neighbor.
      parents[n] = node;
    }
    console.log(node, cost);
  });

  // Mark the node as processed
  processed = processed.concat(node);
  
  // Find the next node to process, and loop
  node = find_lowest_cost_node(costs);
}

console.log("Cost from the start to each node:");
console.log(costs); 
