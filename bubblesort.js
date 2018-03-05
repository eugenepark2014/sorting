let check = true

function bubbleSort(array){
  // console.log(array);
  let temp = array;
  for(let i = 0;i<array.length -1;i++){
    for (let j = 0; j<array.length -1; j++) {
      swap(temp, j, j+1)
    }
    if (check === true) break
  }
  return temp;
}

function swap(arr, i, j){
  if(arr[i] > arr[j]){
  const oldVal1 = arr[i];
  arr[i] = arr[j];
  arr[j] = oldVal1;
  check = false
  }
}
// let test = [5,1,2];
// bubblesort(test);
// swap(test, 0, 1);

