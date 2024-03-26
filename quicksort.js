function quicksort(arr) {
  if (arr.length <= 1) return arr
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  let val = arr[0]
  let smaller = [];
  let bigger = [];
  for (let i in arr) {
    if (val < arr[i]) {
      bigger.push(arr[i])
    } else if (val > arr[i]) {
      smaller.push(arr[i])
    }
  }

  // Pick the first value as the pivot

  // Orient the pivot so that...
  // every number smaller than the pivot is to the left
  // every number larger (or equal) than the pivot is to the right

  // Recursively sort the left
  // Recursively sort the right

  // Return the left, pivot and right in sorted order
  return [...quicksort(smaller), val, ...quicksort(bigger)]
}


module.exports = [quicksort];
