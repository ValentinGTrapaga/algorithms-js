const mergeSort = require('./mergeSort')

class Node {
  constructor(data, leftNode = null, rightNode = null) {
    this.data = data
    this.right = rightNode
    this.left = leftNode
  }
}

class Tree {
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

  inOrderTraverse(callback) {
    if (this.root === null) return null
    this.inOrderTraverseNode(this.root, callback)
  }

  preOrderTraverse(callback) {
    if (this.root === null) return null
    this.preOrderTraverseNode(this.root, callback)
  }

  postOrderTraverse(callback) {
    if (this.root === null) return null
    this.postOrderTraverseNode(this.root, callback)
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
console.log(tree.root)
console.log(tree.root.left)
console.log(tree.root.right)
console.log(prettyPrint(tree.root))
tree.insert(25)
tree.insert(28)
tree.insert(280)
tree.insert(6)
console.log(prettyPrint(tree.root))
tree.inOrderTraverse(console.log)
console.log('----------------------')
tree.preOrderTraverse(console.log)
console.log('----------------------')
tree.postOrderTraverse(console.log)
