const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  root() {
    return this.rootNode;
  }

  add (data) {
    this.rootNode = addWithin(this.rootNode, data);
    function addWithin(node, data) {
      if (!node) {
        return new Node (data)
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data)
      } else if (data > node.data) {
        node.rigth = addWithin(node.rigth, data)
      }
      return node;
    }
  }

  has(data) {
    return searchWithin(this.rootNode, data) !== null;
    function searchWithin(node, data) {
      if (!node) {
        return null
      }
      if (data === node.data) {
        return node;
      } else if (data < node.data) {
        return searchWithin(node.left, data)
      } else if (data > node.data) {
        return searchWithin(node.rigth, data)
      }
    }
  }

  find (data) {
    return searchWithin(this.rootNode, data);
    function searchWithin(node, data) {
      if (!node) {
        return null
      }
      if (data === node.data) {
        return node;
      } else if (data < node.data) {
        return searchWithin(node.left, data)
      } else if (data > node.data) {
        return searchWithin(node.rigth, data)
      }
    }
  }
  

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};