var squashArray = function(param) {
    var squashed = undefined; //Create var squashed but set undefined to assign a value later in function
    if (Array.isArray(param)) { //Check if squashArray parameter is an array. If true, assign squashed w/ first value in the param array and set as array
        squashed = [param[0]];
        var squashed2 = [];
        for (var i = param.length - 1; i >= 0; i--) {
            if (Array.isArray(param[i])) {
                var popped = param.pop();
                console.log(popped[0][0]);
                squashed = squashed.concat(popped);

            }
            // else {
            //     squashed2 = squashed2.unshift(param[i]);
            //     //console.log(squashed2);
            //     //console.log("Array.isArray(param[i]) is not working"); 
            // }
            //console.log(squashed2);
        }
    }
    else {
        console.log("Argument is not an array. Please enter an array into the function.") //Check if initial isArray function is broken
    }
    // console.log(squashed2);
    return console.log(squashed) + console.log("above array is returned squash variable @ end of function"); //second console log tags returned squash var in output.
};


// squashArray([1, [2, 3]])
squashArray([1, [2, [3, [4, [5, 6]]]]])
// squashArray([[1, 2], [3, 4], [5, 6]]);


// for (var i = array.length - 1; i >= 0; i--) {
//     console.log(i);
// }

// var poppedArray = array.pop();
// var popped2Array = poppedArray.pop();
// var popped3Array = array.concat(poppedArray, popped2Array);
// console.log(popped3Array);
// console.log(popped2Array);
// console.log(poppedArray);
// // array.pop();
// console.log(array);



// console.log(Number.isInteger(array[1][1]));
// console.log(Array.isArray(array[1][1]));
// console.log(Array.isArray(array[1]) && (Array.isArray(array[1][0]) === false));
// console.log(Array.isArray(array[1]) && (Array.isArray(array[1][1]) === true));
