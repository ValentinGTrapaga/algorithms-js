class Node {
  constructor(data, predecessor = null) {
    this.data = data
    this.predecessor = predecessor
  }
}

class Board {
  constructor() {
    this.vertices = [0, 1, 2, 3, 4, 5, 6, 7]
    this.knightPos = [0, 0]
  }

  setKnight(x, y) {
    this.knightPos = [x, y]
  }

  getPossibleMoves(knightPos = this.knightPos) {
    let x = knightPos[0]
    let y = knightPos[1]
    let possibleMoves = []
    const directions = [
      [x + 1, y + 2],
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x + 1, y - 2],
      [x - 1, y - 2],
      [x - 2, y - 1],
      [x - 2, y + 1],
      [x - 1, y + 2]
    ]
    for (let move of directions) {
      const [posX, posY] = move
      if (this.vertices.includes(posX) && this.vertices.includes(posY)) {
        possibleMoves.push([posX, posY])
      }
    }
    return possibleMoves
  }

  knightMoves(start, end) {
    if (
      !this.vertices.includes(start[0]) ||
      !this.vertices.includes(start[1]) ||
      !this.vertices.includes(end[0]) ||
      !this.vertices.includes(end[1])
    ) {
      return `Out of board`
    }
    let startNode = new Node(start)
    let endNode = new Node(end)
    let queue = [startNode]
    let possibleMoves = []
    let path = []
    console.log(endNode.data)
    while (queue.length > 0) {
      let currentNode = queue.shift()
      if (JSON.stringify(currentNode.data) === JSON.stringify(endNode.data)) {
        endNode.predecessor = currentNode
        break
      }
      possibleMoves = this.getPossibleMoves(currentNode.data)
      for (let move of possibleMoves) {
        let moveNode = new Node(move, currentNode)
        queue.push(moveNode)
      }
    }
    let currNode = endNode
    while (currNode.predecessor !== null) {
      path.unshift(currNode.data)
      currNode = currNode.predecessor
    }
    path.unshift(currNode.data)
    path.pop()
    console.log(
      `Congrats! You've done it! It takes ${
        path.length - 1
      } step(s) to go from [${start}] to [${end}]`
    )
    console.log(`[${path.join('] -> [')}]`)
    return 1
  }
}

let board = new Board()
console.log(board.knightMoves([0, 0], [7, 7]))

//TODO: tests!
