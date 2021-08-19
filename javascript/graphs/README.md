## Graph

A graph is a **non-linear data structure** that can be looked at as a collection of vertices (or nodes) potentially connected by line segments named edges.


### terminology
- Vertex - A vertex, also called a “node”, is a data object that can have zero or more adjacent vertices.
- Edge - An edge is a connection between two nodes.
- Neighbor - The neighbors of a node are its adjacent nodes
- Degree - The degree of a vertex is the number of edges connected to that vertex.


### Directed vs Undirected

#### Directed
is a graph where each edge is undirected or bi-directional. This means that the undirected graph does not move in any direction

#### Undirected
is a graph where every edge is directed.


### Complete vs Connected vs Disconnected


#### Complete
A complete graph is when all nodes are connected to all other nodes.



#### Connected
A connected graph is graph that has all of vertices/nodes have at least one edge.



#### Disconnected
A disconnected graph is a graph where some vertices may not have edges.


### Cyclic Graphs
A Cyclic graph is a graph that has cycles. and a cycle is defined as a path of a positive length that starts and ends at the same vertex.

### Graph Representation
We represent graphs through:


- **Adjacency Matrix:** An Adjacency matrix is represented through a 2-dimensional array. If there are n vertices, then we are looking at an n x n Boolean matrix


- **Adjacency List:**
 most common way to represent graphs.
An adjacency list is a collection of linked lists or array that lists all of the other vertices that are connected.





## Challenge 35: New Implementation

### Features
The graph should be represented as an adjacency list, and should include the following methods:

#### add node
- Arguments: value
- Returns: The added node
- Add a node to the graph


#### add edge
- Arguments: 2 nodes to be connected by the edge, weight (optional)
- Returns: nothing


#### Adds a new edge between two nodes in the graph
- If specified, assign a weight to the edge
- Both nodes should already be in the Graph


#### get nodes
- Arguments: none
- Returns all of the nodes in the graph as a collection (set, list, or similar)


#### get neighbors
- Arguments: node
- Returns a collection of edges connected to the given node
- Include the weight of the connection in the returned collection


#### size
- Arguments: none
- Returns the total number of nodes in the graph
