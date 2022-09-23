function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let node = new Node(value);

    let currentNode = this.root;
    if (!this.root) {
      this.root = node;
      return;
    }
    while (currentNode !== null) {
      if (currentNode.value < value) {
        if (currentNode.right === null) {
          currentNode.right = node;
        } else {
          currentNode = currentNode.right;
        }
      } else if (currentNode.value > value) {
        if (currentNode.left === null) {
          currentNode.left = node;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        return;
      }
    }
  }
  lookup(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value > value) currentNode = currentNode.left;
      else if (currentNode.value < value) currentNode = currentNode.right;
      else if (currentNode.value === value) return currentNode;
    }
    return false;
  }
  remove() {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(120);

//        9
//    4       20
//  1   6   15  120
