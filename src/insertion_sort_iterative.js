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


function insert(element, list) {
    let [next, ...rest] = list;

    if (list.length == 0)
        return [element];

    return element <= next ? [element, next, ...rest] : [next, ...insert(element, rest)];
}

function insertsort(list) {

    let [first, ...rest] = list;

    return list.length == 0 ? list : insert(first, insertsort(rest));

}

const shortlist = [11, 3, 7, 4];
const sorted_shortlist = insertsort(shortlist);
console.log("Sorted Shortlist : ", sorted_shortlist);

const num_items = 100;
const largelist = _.range(num_items).map(n => getRandomInt(0, num_items));
const sorted_largelist = insertsort(largelist);
console.log("Sorted Largelist : ", sorted_largelist);

/*
  insertsort([11,3,7,4])

   insert(11, insertsort([3,7,4]))

     insert(11, = insert (11, [3,4,7]) = [3,4,7,11]
                    element > next:
                    [3, insert(11, [4,7])] == [3,4,7,11]
                      element > next :
                      [4, insert(11, [7])] == [4,7,11]
                        element > next
                        [7, insert(11, []) == [7,11]
                          list.length == 0
                          [11]

       insert(3, = insert (3, [4,7]) = [3,4,7]
                     element <= next
                     [3,4,7]

         insert(7, = insert(7, [4])  = [4,7]
                       element > next
                       [4, insert(7, [])] = [4,7]
                             list.length == 0
                             [7]

           insert(4, = insert(4,[]) = [4]
                          list.length == 0
                          [4]
             insertsort([]) = []
           )
         )
       )
     )
 */