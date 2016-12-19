const _ = require('lodash');

// Generate a list of random integers;
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const src = _.range(100).map(n => getRandomInt(0, 100));

//Iterative approach in Cormen;

// The first case is 2 , while we are not yet the length of the array iterate
for (let j = 2; j < src.length; j++) {

    // Set the key to get the value of index[j]
    let key = src[j];

    // Let I  = the index of previous element
    let prevIndex = j - 1;

    // Iterate through all previous items (which are sorted)
    // if src[i] has a greater value than the key
    // the next element gets the value of the previous element
    // ...check the next index to the left
    while ((prevIndex > 0) && (src[prevIndex] > key)) {
        src[prevIndex + 1] = src[prevIndex]; // swap em
        prevIndex--; // Decrement
    }
    //Give the original value src[j]
    // In other words place it after the lowest index whose value it is greater than
    src[prevIndex + 1] = key;
}
console.log(src);