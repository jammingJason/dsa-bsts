class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // If the tree is empty, insert at the root
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    // Otherwise, find the correct spot for the new node.
    var current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(value) {
    const currNode = new Node(value, null, null);
    if (!this.root) this.root = currNode;
    let rootNode = this.root;
    const tree = [rootNode];

    //  Find any leaves that may be out there in the wind
    const whereTo = () => {
      const treeNode = tree.pop();

      if (treeNode.left) {
        if (treeNode.left.val < currNode.val) {
          currNode.left = treeNode.left;
        }
      }
      if (treeNode.right) {
        if (treeNode.right.val < currNode.val) {
          currNode.right = treeNode.right;
        }
      }
      if (currNode.val > treeNode.val) {
        treeNode.right = currNode;
        // tree.push(currNode);
      }
      if (currNode.val < treeNode.val) {
        treeNode.left = currNode;
        // tree.push(currNode);
      }
      console.log(treeNode);
    };

    whereTo();
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(value) {
    const base = this.root;
    let tree = [base];
    while (tree.length) {
      const treeNode = tree.pop();
      if (treeNode.val === value) return treeNode;
      // console.log(treeNode);
      treeNode.left ? tree.push(treeNode.left) : () => {};
      treeNode.right ? tree.push(treeNode.right) : () => {};
    }
    return 'undefined';
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(value) {
    const base = this.root;
    let tree = [base];
    let treeNode = tree.pop();

    const findMe = (node) => {
      if (node.val === value) console.log('FOUND IT!');
      if (node.left) findMe(node.left);
      if (node.right) findMe(node.right);
    };
    findMe(treeNode);

    return undefined;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const treeArray = [];
    const traverse = (node = this.root) => {
      treeArray.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse();
    console.log(treeArray);
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const treeArray = [];
    const traverse = (node = this.root) => {
      if (node.left) traverse(node.left);
      treeArray.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse();
    console.log(treeArray);
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const treeArray = [];
    const traverse = (node = this.root) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      treeArray.push(node.val);
    };
    traverse();
    console.log(treeArray);
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const rootNode = this.root;
    let tree = [rootNode];
    let newTree = [];
    while (tree.length) {
      const treeNode = tree.pop();
      newTree.push(treeNode.val);
      if (treeNode.left) tree.unshift(treeNode.left);
      if (treeNode.right) tree.unshift(treeNode.right);
    }
    return newTree;

    // console.log(binarySearchTree);
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
binarySearchTree.insert(1);
binarySearchTree.insert(5);
binarySearchTree.insert(50);
binarySearchTree.bfs();
module.exports = BinarySearchTree;
