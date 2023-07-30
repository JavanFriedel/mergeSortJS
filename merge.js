function merge(arr1, arr2) {
  // Track depth of each node seperatly
  let leftDepth = 0;
  let rightDepth = 0;

  // Create a parent array to sort into
  const sortedArray = [];

  // While there is still depth to traverse on either side compare their values
  while (leftDepth < arr1.length && rightDepth < arr2.length) {
    if (arr1[leftDepth] <= arr2[rightDepth]) {
      sortedArray.push(arr1[leftDepth]);
      leftDepth++;
    } else {
      sortedArray.push(arr2[rightDepth]);
      rightDepth++;
    }
  }

  //One element will remain on one side of the comparison each time, add the final element to array
  while (arr1.length > leftDepth) {
    sortedArray.push(arr1[leftDepth]);
    leftDepth++;
  }

  while (arr2.length > rightDepth) {
    sortedArray.push(arr2[rightDepth]);
    rightDepth++;
  }

  // Return now sorted array
  return sortedArray;
}

// To test the Merge Function
// console.log(merge([10, 20], [5, 15]));

function mergeSort(array) {
  // If the array length is 1, we have hit the bottom of the array
  if (array.length <= 1) {
    return array;
  }

  let middle = Math.floor(array.length / 2);

  // Split the array into 2, passing that array back into merge sort
  const arr1 = array.slice(0, middle);
  const arr2 = array.slice(middle);

  const sortedLeft = mergeSort(arr1);
  const sortedRight = mergeSort(arr2);

  // Return the merged Array from Mergesort
  return merge(sortedLeft, sortedRight);
}

// To test the Merge Sort Function
console.log(mergeSort([10, 20, 12, 9]));
