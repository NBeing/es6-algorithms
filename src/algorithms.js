const merge_sort = require('./merge_sort.js');
const insert_sort = require('./insertion_sort_ML.js');

// Generate a list of random integers;
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const num_items = 12;
const unsorted_list = _.range(num_items).map(n => getRandomInt(0, num_items));
const insert_sorted_list = insert_sort(unsorted_list);
const merge_sorted_list = merge_sort(unsorted_list);

console.log("Insert Sorted List : ", insert_sorted_list);
console.log("Merge Sorted List  : ", merge_sorted_list);