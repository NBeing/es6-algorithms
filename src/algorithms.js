// const _ = require('lodash');
// const merge_sort = require('./merge_sort.js');
// const insert_sort = require('./insertion_sort_ML.js');
// const quick_sort = require('./quick_sort.js');
// const BST = require('./bst.js').BST;
// const Node = require('./bst.js').Node;

import lodash from 'lodash'
const { range } = lodash
import { merge_sort } from './merge_sort.js';
import { insert_sort } from './insertion_sort_ML.js';
import { quick_sort } from './quick_sort.js';
import { BST, Node } from './bst.js'
// Generate a list of random integers;
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const num_items = 12;
const unsorted_list = range(num_items).map(n => getRandomInt(0, num_items));
const insert_sorted_list = insert_sort(unsorted_list);
const merge_sorted_list = merge_sort(unsorted_list);

console.log("Insert Sorted List : ", insert_sorted_list);
console.log("Merge Sorted List  : ", merge_sorted_list);

let bst = new BST( new Node(13) );
const setBst = bst => v => bst.insert( bst.root, new Node(v));
unsorted_list.forEach(setBst(bst));
console.log(bst.getHeight(bst.root));
console.log(
    `The resulting tree had a height of : ${bst.getHeight(bst.root)}
     ${JSON.stringify(bst.root, null, 2)}`);

console.log("Done!");

