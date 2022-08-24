function sumTo(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}

function sumToRecursion(n) {
  return n === 1 ? 1 : n + sumToRecursion(n - 1)
}

function sumArithmeticProgression(n) {
  return n * ((1 + n) / 2)
}

function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1)
}

function fib(n) {
  if (n === 1) {
    return 1
  } else {
    return (fib(n - 1) + fib(n - 2))
  }
}

let list1 = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printList(list) {
        console.log(list.value)
    if (list.next) {
        return printList(list.next)
    }
}

function printReverseList(list) {
    if(list.next) {
        printReverseList(list.next)
    }
    console.log(list.value)
}