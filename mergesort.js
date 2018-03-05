function split(arr) {
  let mid = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, mid);
  let secondHalf = arr.slice(mid);
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

let arr1 = [5, 6, 7, 8];
let arr2 = [1, 2, 3, 4];

console.log(merge([arr1, arr2]));
