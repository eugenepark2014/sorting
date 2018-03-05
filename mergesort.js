function split(arr) {
  let mid = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, mid);
  let secondHalf = arr.slice(mid);
  // console.log('split', firstHalf, secondHalf);
  return [firstHalf, secondHalf];
}


function merge([arr1, arr2]) {
  let newArr = [];
  // while arr1.length
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      newArr.push(arr1.shift());
    } else {
      newArr.push(arr2.shift());
    }
  }
  if (!arr1.length) {
    newArr = [...newArr, ...arr2];
  } else {
    newArr = [...newArr, ...arr1];
  }

  return newArr;
}

// let arr1 = [5, 6, 7, 8];
// let arr2 = [1, 2, 3, 4];

// console.log(merge([arr1, arr2]));

// [1,2,5,3]

function mergeSort(array) {
if (array.length === 1) {
    return array
}
const splitArr = split(array);
console.log(splitArr);

return merge([mergeSort(splitArr[0]), mergeSort(splitArr[1])])
}

const test = [3,2,4,1,5,9,100,93, 1]
console.log(mergeSort(test))

