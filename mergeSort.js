function merge(leftArr, rightArr) {
  let sortedArr = []
  let leftIndex = 0
  let rightIndex = 0

  // if any array is totally accounted for, the while loop is broken out of
  while (leftIndex !== leftArr.length && rightIndex !== rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      sortedArr.push(leftArr[leftIndex])
      leftIndex++
    } else {
      sortedArr.push(rightArr[rightIndex])
      rightIndex++
    }
  }
  return [
    ...sortedArr,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex)
  ]
}

function mergeSort(arr) {
  if (arr.length < 2) return arr

  const half = arr.length / 2
  const left = arr.splice(0, half)
  return merge(mergeSort(left), mergeSort(arr))
}

console.log(mergeSort([-21, 2, 400, 236, 81, 9, -3]))
