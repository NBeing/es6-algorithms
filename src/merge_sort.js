/* Util */
Array.prototype.halve = function() {
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
Array.prototype.isEmpty = function() {
    return this.length > 0 ? false : true;
};

function merge(arr) {
    let result = [];
    let [left, right] = arr.halve();

    while (!left.isEmpty() || !right.isEmpty()) {
        if (((right[0] == undefined) && left[0]) || left[0] <= right[0])
            result.push(left.shift());
        else
            result.push(right.shift());
    }
    return result;
}

function merge_sort(arr) {

    let [left, right] = arr.halve();

    if (right.length == 1)
        return merge([...left, ...right]);
    else
        return merge([...merge_sort(left), ...merge_sort(right)]);
}

export { merge_sort }