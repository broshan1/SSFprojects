// for loop to loop through numArray
// IF the number is odd (numArray[i] % 2 !== 0)
// then console log
// ELSE, do not console log
const numArray = [1, 4, 6, 7, 8, 9, 0];
for (let i = 0, length = numArray.length; i < length; i++) {
    ((numArray[i] % 2) !== 0) ? console.log(numArray[i]): console.log("Not odd enough!");
}
