//function (some array)
// let results = [];
// reverse some array
// create a for loop with the initialized i starting at the array length
// decrement i until all values in numArray are read
// push each value in numArray[i] into results
// store reversed array's values in results


const numArray = [1, 4, 6, 7, 8, 9, 0];
let reversedArray = (someArray) => {
    let results = [];
    for (var i = (someArray.length - 1); i >= 0; i--) {
        results.push(someArray[i]);
    }
    console.log(results);
}
reversedArray(numArray);
