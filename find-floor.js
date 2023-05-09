function findFloor(arr, val, floor = 0, ceiling = arr.length -1){
    console.log("findfloor");
    if(floor > ceiling){
        return -1;
    }
    if (arr[ceiling] <= val){
        return arr[ceiling];
    }
    let index = Math.floor((floor+ceiling)/2);
    let midVal = arr[index];
    if(midVal == val){
        return midVal;
    }
    if(index > 0 && arr[index-1] <= val && val < midVal){
        return arr[index -1];
    }
    if(val < midVal){
        return findFloor(arr, val, floor, index-1);
    }
    return findFloor(arr, val, index+1, ceiling);

  
}

module.exports = findFloor