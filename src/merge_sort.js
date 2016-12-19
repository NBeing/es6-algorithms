const log = console.log;
// Make a function that splits the list in half

Array.prototype.half = function() {
    let left = [],
        right = [];

    this.filter((el, ind, arr) => {
        return ind < Math.floor(arr.length / 2) ? left.push(arr[ind]) : right.push(arr[ind]);
    });
    return [
        left,
        right
    ];
};


/**
 * @param Array - {number[]} - Takes a list and outputs a sorted copy of the list
 **/

var src = [1, 8, 3, 4, 9];
console.log("Input", src)
const result = merge(src);
log("Result", result);

function merge(arr) {

    let [left, right] = arr.half();
    console.log("left", left)
    console.log("right", right)

    let result = [];

    while (left.length > 0 || right.length > 0) {
        if ((right[0] == undefined && left[0]) || left[0] <= right[0]) {
            console.log("L > R : left", left[0], "right", right[0]);

            result.push(left.shift());
            console.log(result)

        } else if ((left[0] == undefined && right[0]) || right[0] < left[0]) {
            console.log("R > L : left", left[0], "right", right[0]);

            result.push(right.shift());
            console.log(result)
        }

        log(left.length, " ", right.length)

    }
    return result;

    /*
     n1 = q - p + 1  // First step is to get the first half of the array
     n2 = r - q      // Get the second half of the array

     // This is just for Java type shit where you need
     let L[1..n1 + 1] and R[1..n2 + 1] be new arrays

     //For all the elements in the list
     for i = 1 to n1
       //Assign the index of left subarray to the corresponding total
       L[i] = A[p + i - 1]

     // Do the same with the right array
     for j = 1 to n2
       R[j] = A[q+j]

     // Make the last value in the list a sentinel
     L[n2 + 1] = ∞  // ∞ is a sentinel value
     r[N2 + 1] = ∞  // ∞ is a sentinel value

     // Start at the beginning of i and j 
     i = 1
     j = 1

     // from the beginning to the end (p —> R )
     for k = p to r
       // Starting at the beginning of sub array, if the left value is greater than right value
       // Set the main arrays k value to the Left and increment i
       if L[i] <= R[j]
         A[k] = L[i]
         i = i+ 1
       // Else add the right to the main array and increment
       else A[k] = R[j]
         j = j + 1

     */
}




// let blah = [1, 2, 3, 4];
// let blow = blah.pop();
// console.log("blah", blah, "blow", blow);