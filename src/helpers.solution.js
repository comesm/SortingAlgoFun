function swap(arr, first, second) {
  if (first === undefined || second === undefined) {
    return arr;
  } else {
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }
  return arr;
}

function merge(left, right) {
  var result = [];
  var leftIndex = 0;
  var rightIndex = 0;

  while (leftIndex < left.length || rightIndex < right.length) {
    // If current val in the left array is less than the current val in the right array
    // push left value into the result
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    }

    // vice versa
    else if (right[rightIndex] < left[leftIndex]) {
      result.push(right[rightIndex++]);
    }

    // If there are no more values left in the left array
    // push the current val in the right array into the result
    else if (leftIndex === left.length) {
      result.push(right[rightIndex++]);
    }

    // Otherwise, push the value into the left array
    else {
      result.push(left[leftIndex++]);
    }
  }
  return result;
}

function partition(arr, left, right) {
  var pivotIndex = left;
  var pivotVal = arr[left];
  console.log('45 arr', arr);
  console.log('46 pivotIndex', pivotIndex);
  console.log('48 right', right);
  console.log('47 pivotVal', pivotVal);

  while (left < right) {
    console.log('52', left, right);
    // Move right until you find a value greater than the pivot
    while (arr[left] <= pivotVal) {
      console.log('55', left);
      left++;
    }

    if (left > right) {
      break;
    }
    // Move left until you find a value less than or equal to the pivot
    while (arr[right] > pivotVal) {
      console.log('64', right);
      right--;
    }

    if (left < right) {
      console.log('69 left: ', left, ' 69 right: ', right);
      swap(arr, left, right);
    } else {
      console.log('68', left, right);
      break;
    }
    console.log('70', arr);
  }

  swap(arr, right, pivotIndex);
  console.log('72 right', right);
  console.log('72 arr', arr);
  return right;
}


module.exports = {
  merge: merge,
  partition: partition,
  swap: swap
};
