function findRotationCount(arr, floor = 0, ceiling = arr.length-1) {
    if (ceiling < floor){
        return 0;
    }
    if (ceiling===floor){
        return floor;
    }

    index = Math.floor((floor+ceiling)/2);

    if(index < ceiling && arr[index+1] < arr[index]){
        return index+1;
    }
    if(index > floor && arr[index] < arr[index-1]){
        return index;
    }
    if(arr[ceiling] > arr[index]){
        return findRotationCount(arr, floor, index-1);
    }
    return findRotationCount(arr, index+1, ceiling);

}

//module.exports = findRotationCount