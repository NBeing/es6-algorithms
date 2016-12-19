//const x = [3, 4, 5];
//const y = [1, 2, ...x]


var numbers = [5,3,1,6,8,4,9];
var helper = [];
var number;
sort(numbers);
console.log(numbers);

function sort(values) {
    numbers = values;
    number = values.length;
    helper = [number];
    mergesort(0, number - 1);
}
function mergesort(low, high) {
    // check if low is smaller then high, if not then the array is sorted
    if (low < high) {
        // Get the index of the element which is in the middle
        var middle = low + Math.floor((high - low) / 2);
        // Sort the left side of the array
        mergesort(low, middle);
        // Sort the right side of the array
        mergesort(middle + 1, high);
        // Combine them both
        merge(low, middle, high);
    }
}
function merge(low, middle, high) {

    // Copy both parts into the helper array
    for (var i = low; i <= high; i++) {
        helper[i] = numbers[i];
    }

    var i = low;
    var j = middle + 1;
    var k = low;
    // Copy the smallest values from either the left or the right side back
    // to the original array
    while (i <= middle && j <= high) {
        if (helper[i] <= helper[j]) {
            numbers[k] = helper[i];
            i++;
        } else {
            numbers[k] = helper[j];
            j++;
        }
        k++;
    }
    // Copy the rest of the left side of the array into the target array
    while (i <= middle) {
        numbers[k] = helper[i];
        k++;
        i++;
    }

}

