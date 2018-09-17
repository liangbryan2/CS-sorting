function swap (array, indexOne, indexTwo) {
    var temp = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = temp;
}

function selectionSort(array) {
    var len = array.length;
    var min;
    for (var i = 0; i < len; i++) {
        min = i;
        for (var j = i + 1; j < len; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min !== i) {
            swap(array, i, min);
        }
    }
    return array;
}