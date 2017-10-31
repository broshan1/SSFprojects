// for (var i = 0; i < numArray.length; i++)
// add next index value to current one, save it in totalArray
// add numArray[i] + numArray[i+1]
// use let and const
const numArray = [1, 4, 6, 7, 8, 9, 0];
for (let i = 0, length = numArray.length; i < length; i++) {
    let totalArray = [];
    if (i !== (numArray.length - 1)) {
        totalArray.push(numArray[i] + numArray[i + 1]);
        console.log(totalArray);
    }
    else {
        totalArray.push(numArray[i] + numArray[0]);
        console.log(totalArray);
    }
}
