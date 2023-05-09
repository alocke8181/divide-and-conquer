function findRotatedIndex(arr,val) {
    let axis = findAxis(arr);
    if(axis > 0 && val >= arr[0] && val <= arr[axis-1]){
        return binSearch(arr, val, 0, axis-1);
    }
    else{
        return binSearch(arr,val,axis, arr.length-1);
    }
}

function binSearch(arr, val, floor, ceiling){
    if (arr.length ===0){
        return -1;
    }
    if (val < arr[floor] || val > arr[ceiling]){
        return -1;
    }

    while (floor <=ceiling){
        let index = Math.floor((floor+ceiling)/2);
        if(arr[index]===val){
            return index;
        }
        else if (val < arr[index]){
            ceiling = index-1;
        }
        else{
            floor = index +1;
        }
    }
    return -1;
}


function findAxis(arr){
    let floor = 0;
    let ceiling = arr.length-1;
    let index;
    if (arr.length ===1 || arr[0] < arr[arr.length-1]){
        return 0;
    }
    while (floor<=ceiling){
        index = Math.floor((floor+ceiling)/2);
        if (arr[index] > arr[index+1]){
            return index+1;
        }
        else if (arr[floor]<=arr[index]){
            floor = index+1;
        }
        else{
            ceiling = index -1;
        }
    }
}

module.exports = findRotatedIndex