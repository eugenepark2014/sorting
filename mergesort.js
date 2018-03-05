function  split(arr){
  let mid = Math.floor(arr.length/2);
  let firstHalf = arr.slice(0, mid);
  let secondHalf = arr.slice(mid);
  return [firstHalf, secondHalf]
}

function
