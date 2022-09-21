import { mergeSort } from './mergeSort.js'

export class Node {
  constructor(data, leftNode = null, rightNode = null) {
    this.data = data
    this.right = rightNode
    this.left = leftNode
  }
}

export class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr)
  }

  buildTree(arr) {
    if (arr === null) return null
    // Sort and remove duplicates
    let sorted = [...new Set(mergeSort(arr))]

    let start = 0
    let end = sorted.length - 1
    if (start > end) return null

    let mid = parseInt((start + end) / 2)
    let root = new Node(
      sorted[mid],
      this.buildTree(sorted.slice(0, mid)),
      this.buildTree(sorted.slice(mid + 1))
    )

    return root
  }

  insertNode(node, value) {
    if (node.data > value) {
      if (node.left === null) {
        node.left = new Node(value)
      } else {
        this.insertNode(node.left, value)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(value)
      } else {
        this.insertNode(node.right, value)
      }
    }
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value)
    } else {
      this.insertNode(this.root, value)
    }
  }

  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.data)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.data)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.data)
    }
  }

  inOrderTraverse(arr) {
    if (this.root === null) return null
    this.inOrderTraverseNode(this.root, arr)
  }

  preOrderTraverse(callback) {
    if (this.root === null) return null
    this.preOrderTraverseNode(this.root, callback)
  }

  postOrderTraverse(callback) {
    if (this.root === null) return null
    this.postOrderTraverseNode(this.root, callback)
  }

  levelOrderTraverse(callback) {
    if (this.root === null) return null
    let queue = [this.root]
    let currentNode
    while (queue.length !== 0) {
      currentNode = queue.shift() // array.shift() gets the first value from the queue
      callback(currentNode.data)
      if (currentNode.left !== null) queue.push(currentNode.left)
      if (currentNode.right !== null) queue.push(currentNode.right)
    }
  }

  minNode(node) {
    let current = node
    while (current !== null && current.left !== null) {
      // Viaja hasta el nodo de mas a la izquierda
      current = current.left
    }
    return current
  }

  min() {
    return this.minNode(this.root)
  }

  maxNode(node) {
    let current = node
    while (current !== null && current.right !== null) {
      // Viaja hasta el nodo de mas a la derecha
      current = current.right
    }
    return current
  }

  max() {
    return this.maxNode(this.root)
  }

  searchNode(node, key) {
    if (node === null) return false
    if (key < node.data) {
      return this.searchNode(node.left, key)
    } else if (key > node.data) {
      return this.searchNode(node.right, key)
    } else {
      return node
    }
  }

  search(value) {
    return this.searchNode(this.root, value)
  }

  removeNode(node, value) {
    if (node === null) return null // {2}
    if (value < node.data) {
      // {3}
      node.left = this.removeNode(node.left, value) // {4}
      return node // {5}
    } else if (value > node.data) {
      // {6}
      node.right = this.removeNode(node.right, value) // {7}
      return node // {8}

      //We found the node!!!
    } else {
      // key is equal to node.item
      // case 1
      if (node.left == null && node.right == null) {
        // {9}
        // leaf node
        node = null // {10} Assigns null to the node found
        return node // {11} Returns the null value to assign it to the parent
      }
      // case 2 node with left or right child
      if (node.left == null) {
        // {12}
        node = node.right // {13}
        return node // {14}
      } else if (node.right == null) {
        // {15}
        // it has no right child so the one on the left is assigned as the new node
        node = node.left // {16}
        return node // {17}
      }
      //case 3
      const aux = this.minNode(node.right) // {18}
      node.data = aux.data // {19}
      node.right = this.removeNode(node.right, aux.data) // {20}
      return node // {21}
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value)
  }

  height(node = this.root) {
    if (node === null) {
      return -1
    } else {
      let left = this.height(node.left)
      let right = this.height(node.right)

      return Math.max(left, right) + 1
    }
  }

  isBalanced(root = this.root) {
    if (root === null) return false
    let leftHalfTree = root.left
    let rightHalfTree = root.right

    let difference = Math.abs(
      this.height(leftHalfTree) - this.height(rightHalfTree)
    )
    if (difference > 1) {
      return false
    } else {
      return true
    }
  }

  rebalance() {
    if (this.isBalanced(this.root) == false) {
      let treeArray = []
      this.levelOrderTraverse((elem) => treeArray.push(elem))
      let newTree = new Tree(treeArray)
      this.root = newTree.root
    }
  }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false)
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`)
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true)
  }
}

// console.log(
//   ...new Set(mergeSort([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]))
// )
const tree = new Tree([
  1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 325, 15, 27
])
// console.log(tree.root)
// console.log(tree.root.left)
// console.log(tree.root.right)
console.log(tree.isBalanced())
console.log(prettyPrint(tree.root))
tree.insert(25)
tree.insert(28)
tree.insert(280)
tree.insert(6)
tree.insert(665)
tree.insert(6234523)
tree.insert(6123123)
tree.insert(6432)
tree.insert(1231236)
tree.insert(567886)
tree.insert(6123)
tree.insert(67)
tree.insert(69)
tree.insert(-92)
tree.insert(-8934)
tree.insert(-8921)
// console.log(prettyPrint(tree.root))
// tree.remove(67)
console.log(prettyPrint(tree.root))
// let inOrderArr = []
// tree.inOrderTraverse((elem) => inOrderArr.push(elem))
// tree.levelOrderTraverse((elem) => inOrderArr.push(elem))
// console.log(inOrderArr)
console.log(tree.isBalanced())
tree.rebalance()
console.log(tree.isBalanced())
console.log(prettyPrint(tree.root))
