var squashArray = function(param) {
    var squashed = undefined; //Create var squashed but set undefined to assign a value later in function
    if (Array.isArray(param)) { //Check if squashArray parameter is an array. If true, assign squashed w/ first value in the param array and set as array
        squashed = [param[0]];
        for (var i = 1; i < param.length; i++) { //Loop through rest of param's array values. Start at 1 b/c index0 is assigned to squashed.
            var squashed2 = []; //Create array#2 to eventually concat with squashed
            if (Array.isArray(param[i])) { //Loop should check if param's next value isArray to add to squashed2
                squashed2 = squashed.concat(param[i]); //Use squashed2 w/ squashed.concat. squashed.concat(param[i]) alone won't work.
                for (var j = 0; j < param[i][j].length; j++) { //This loop should check if param[i][j] can be pushed/concat
                    //squashed2.push(param[i][j]);
                    console.log(param[i][j]);
                    console.log('test');
                }
            }
            else {
                console.log("Array.isArray(param[i] is not working"); //Check if the isArray condition is working. Error printed in console
            }
        }
    }
    else {
        console.log("Argument is not an array. Please enter an array into the function.") //Check if initial isArray function is broken
    }
    return console.log(squashed2) + console.log("above array is returned squash variable @ end of function"); //second console log tags returned squash var in output.
};

squashArray([1, [2, 3]]) // works for this
// squashArray([1, [2, [3, [4, [5, 6]]]]])
// squashArray([[1, 2], [3, 4], [5, 6]]);

// var array = [1, [2, 3]];
// console.log(Array.isArray(array[1]));

/*
Steps:
1. Check if param is an array and create my BASE array
- if param isArray we want to create a BASIC array at some point. Lets first go through a for loop and assign array[0] to squashed
    - squashed = param[0];
    - for each index in the array, start w/ var i = 1 then keep looping
        - var squashed2 = [];
        -If the array[i] isArray = true, then look through the array and push all its values into squashed2
            - for (var j = 0; j < array[i][j].length; j++) 
                - squashed2.push(array[i][j])
            
        -Else...?

    - if param IS NOT isArray (aka FALSE), then check if value is a number
        if a number, then squashed = [value]
        else (FALSE) then return an alert (false) value
        
2. Create a second array to concatenate with my BASE array
- End result should be squashed2 = [values]
END
?. Concat my base array with... a second array (or more arrays)
var concatArrays = squashed.concat(squashed2)
?. Return concatArrays;
*/
