function countZeroes(arr) {
  let floor = 0;
  let ceiling = arr.length-1;
  let index;
  while(floor <= ceiling){
    index = Math.floor((floor+ceiling)/2);
    val = arr[index];
    if(val===1){
      floor = index + 1;
    }
    else{
      ceiling = index -1;
    }
  }
  return arr.length - floor;
}

module.exports = countZeroes