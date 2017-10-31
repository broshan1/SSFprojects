var one = [1, [2, 3]];
var two = [1, [2, [3, [4, [5, 6]]]]];
var three = [[1, 2], [3, 4], [5, 6]];

var squashArray = function(arr) {
    var squashed = [];

    for (var i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            squashed.push(arr[i]);
            // console.log(arr[i]);
        }
        else {
            squashed = squashed.concat(squashArray(arr[i]));
            // console.log(squashed);
        }
    }
    return squashed;
};

console.log(squashArray(three));
