class LinkedList {
  constructor(headNode = null) {
    this.first = new Node(headNode)
    headNode === null ? (this.length = 0) : (this.length = 1)
  }

  append(nodeValue) {
    const newNode = new Node(nodeValue)
    if (this.first.value === null) {
      this.first = newNode
    } else {
      let pointer = this.first
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode
      }
      pointer.nextNode = newNode
    }
    this.length++
  }

  prepend(nodeValue) {
    const newNode = new Node(nodeValue, first)
    this.first = newNode
    this.length++
  }

  size() {
    return this.length
  }

  head() {
    return this.first.value
  }

  tail() {
    if (this.first.value === null) return null
    let pointer = this.first
    while (pointer.nextNode !== null) {
      // To get to the last node of the list
      pointer = pointer.nextNode
    }
    return pointer.value
  }

  at(nodeIndex) {
    if (this.first === null) return null
    let index = 0
    let pointer = this.first
    while (pointer.value !== null) {
      // To go through the whole list
      if (index === nodeIndex) return pointer.value
      pointer = pointer.nextNode
      index++
    }
    return null
  }

  pop() {
    if (this.first === null) return null
    let currPointer = this.first
    let nextPointer = currPointer.nextNode
    while (nextPointer.nextNode !== null) {
      currPointer = currPointer.nextNode
      nextPointer = nextPointer.nextNode
    }
    const returnNode = nextPointer
    currPointer.nextNode = null
    this.length--
    return returnNode.value
  }

  contains(value) {
    let pointer = this.first ?? null
    while (pointer !== null && pointer.nextNode !== null) {
      // Go through the list till the last value
      if (pointer.value === value) return true
      pointer = pointer.nextNode
    }
    return false
  }

  find(value) {
    let pointer = this.first ?? null // If there's first node, then assign, else, assign null
    let index = 0
    while (pointer !== null && pointer.nextNode !== null) {
      // Go through the list till the last value
      if (pointer.value === value) return index
      index++
      pointer = pointer.nextNode
    }
    return null
  }

  toString() {
    let pointer = this.first ?? null
    let str = ''
    while (pointer !== null && pointer.value !== null) {
      // Go through the list till the last value
      str += `( ${pointer.value} ) -> `
      pointer = pointer.nextNode
    }
    str += 'null'
    return str
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value
    this.nextNode = nextNode
  }
}

// const linkedL = new LinkedList()
// console.log(linkedL.head())
// linkedL.append(15)
// console.log(linkedL.head())
// linkedL.append(17)
// linkedL.append(123)
// linkedL.append(126)
// linkedL.append(120)
// console.log(linkedL.toString())
// console.log(linkedL.tail())
// console.log(linkedL.size())
// console.log(linkedL.pop())
// console.log(linkedL.tail())
// console.log(linkedL.contains(15))
// console.log(linkedL.contains(123))
// console.log(linkedL.contains(120))
// console.log(linkedL.find(120))
// console.log(linkedL.find(123))
// console.log(linkedL.find(13))
// console.log(linkedL.toString())

// TO DO:
// insertAt(value, index) that inserts a new node with the provided value at the given index.
// removeAt(index) that removes the node at the given index.
