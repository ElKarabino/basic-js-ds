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
        node.right = addWithin(node.right, data)
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
        return searchWithin(node.right, data)
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
        return searchWithin(node.right, data)
      }
    }
  }
  

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if  (data < node.data) {
        node.left = removeNode(node.left, data)
      } else if (data > node.data) {
        node.right = removeNode(node.right, data)
      } else {
        if (!node.left && !node.right) {
          node = null;
        } else if (!node.left) {
          node = node.right;
        } else if (!node.right) {
          node = node.left;
        } else {
          const minVal = findMinVal(node.right);
          node.data = minVal;
          node.right = removeNode(node.right, minVal)
        }
      }
      return node
    }
    function findMinVal(node) {
      while(node.left) {
        node = node.left;
      }
      return node.data;
    }
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