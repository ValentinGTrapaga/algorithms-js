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
// console.log(linkedL.tail())
// console.log(linkedL.size())
// console.log(linkedL.pop())
// console.log(linkedL.tail())
