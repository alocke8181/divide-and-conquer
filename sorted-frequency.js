function sortedFrequency(arr, val) {
    if (val > arr[arr.length-1] || val < arr[0]){
        return -1;
    }
    let first = findFirst(arr, val);
    let last = findLast(arr, val);
    return (last-first+1);
}

function findFirst(arr, val, floor = 0, ceiling = arr.length - 1) {
    if (ceiling >= floor) {
      let index = Math.floor((floor + ceiling) / 2)
      if ((index === 0 || val > arr[index - 1]) && arr[index] === val) {
        return index;
      } else if (val > arr[index]) {
        return findFirst(arr, val, index + 1, ceiling)
      } else {
        return findFirst(arr, val, floor, index - 1)
      }
    }
    return -1
  }
  
  function findLast(arr, val, floor = 0, ceiling = arr.length - 1) {
    if (ceiling >= floor) {
      let index = Math.floor((floor + ceiling) / 2)
      if ((index === arr.length - 1 || val < arr[index + 1]) && arr[index] === val) {
        return index;
      } else if (val < arr[index]) {
        return findLast(arr, val, floor, index - 1)
      } else {
        return findLast(arr, val, index + 1, ceiling)
      }
    }
    return -1
  }
//module.exports = sortedFrequency