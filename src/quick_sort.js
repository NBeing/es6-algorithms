const quick_sort = list => {

    if (list.length <= 1)
        return list

    if (list.length > 0) {

        let left = [],
            right = []

        let pivot = list.pop()

        list.map((n) => {
            n < pivot ? left.push(n) : right.push(n)
        })

        return [...quick_sort(left), pivot, ...quick_sort(right)]
    }
}

const test = [9, 4, 1, -3, 5, 2, -16, 8, 14, 32, 0, 19, 1, 7, -1]
const result = quick_sort(test);

console.log("====================QUICK SORTED=================== \n", result, "\n");

module.exports = quick_sort;