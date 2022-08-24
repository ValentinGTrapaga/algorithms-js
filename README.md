# Recursion exercises

These are exercises taken from:

[javascript.info](https://javascript.info/recursion) and [condingame](https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion)

### Javascript.info

1. Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n

```
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
```
+ Using a for loop.
+ Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
+ Using the arithmetic progression formula.

2. The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

```
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
```

3. The sequence of Fibonacci numbers has the formula F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub>. In other words, the next number is a sum of the two preceding ones. Write a function fib(n) that returns the n-th Fibonacci number.

```
function fib(n):

fib(3) // 2
fib(7) // 13
fib(77) // 5527939700884757
```

4. Let’s say we have a single-linked list

```
let list = {
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
```

Write a function printList(list) that outputs list items one-by-one. Make two variants of the solution: using a loop and using recursion.

5. Output a single-linked list from the previous task in the reverse order.

Make two solutions: using a loop and using a recursion.

### Codingame

1. Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

2. Write a function called productOfArray which takes in an array of numbers and returns the product of them all

3. Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.



