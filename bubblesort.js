function bubblesort(array){
  // console.log(array);
  let temp = array;
  for(let i = 0;i<array.length -1;i++){
    // console.log(array);
    swap(temp, i, i+1);
    console.log(temp);
  }
  return array;
}
function swap(arr, i, j){
  if(arr[i] > arr[j]){
  const oldVal1 = arr[i];
  arr[i] = arr[j];
  arr[j] = oldVal1;
  }
}
// let test = [5,1,2];
// bubblesort(test);
// swap(test, 0, 1);

