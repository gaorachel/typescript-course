"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
let highScore;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
let stuff = [];
// Create an array called colors that can hold a mixture of RGB and HSL color types
let colors = [];
let colors2 = [];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
const greet = (name) => {
    if (typeof name === "string") {
        console.log(`Hello, ${name}`);
    }
    else {
        for (let n in name) {
            console.log(`Hello, ${n}`);
        }
    }
};
