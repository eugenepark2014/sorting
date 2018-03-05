
function bubbleSort(array){
  // console.log(array);
  let temp = array;
  let check = true
  while(check){
  for(let i = 0;i<array.length -1;i++){
    check = false;
    for (let i = 0; i<array.length -1; i++) {
      swap(temp, i, i+1, check)
    }
  }
  return temp;
  }
}

function swap(arr, i, j, check){
  if(arr[i] > arr[j]){
  const oldVal1 = arr[i];
  arr[i] = arr[j];
  arr[j] = oldVal1;
  check = true;
  console.log(check);
  }
}
