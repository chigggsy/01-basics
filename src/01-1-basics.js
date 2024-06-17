/**
 * Task 6: Control Structures - Conditional Statements
 */

// Define a variable named studentGrade that is of type number.
let studentGrade = 70;

function gradeCommentary() {
    // 1. If studentGrade is above or equal to 90, log "Excellent work!".
    if (studentGrade >= 90) {
        console.log("Excellent work!");
        // 2. If studentGrade is between 80 and 89 (inclusive), log "Good job!".
    } else if (studentGrade >= 80 && studentGrade <= 89) {
        console.log("Good job!");
    }
    // 3. If studentGrade is between 70 and 79 (inclusive), log "You passed.".
    else if (studentGrade >= 70 && studentGrade <= 79) {
        console.log("You passed.");
    }
    // 4. If studentGrade is below 70, log "Needs improvement.".
    else if (studentGrade < 70) {
        console.log("Needs improvement.");
    }
}

/**
 * Task 7: Control Structures - Loops
 */

function logNumbers() {
    // 1. Log numbers from 1 to 10 using a for loop.
    for (let number = 1; number <= 10; number += 1) {
        console.log(number);
    }
}

function countByTwos() {
    // 2. Using a while loop, log even numbers from 2 to 20.
    let number = 2;
    while (number <= 20) {
        console.log(number);
        number += 2;
    }
}

function triangle() {
    // 3. Using loops, output a traingle of '#' characters
    /*
    #
    ##
    ###
    ####
    #####
    ######
    #######
  */
    let number = 1;
    while (number <= 7) {
        console.log("#".repeat(number));
        number += 1;
    }
}

/**
 * Task 8: More on Functions
 */

// 1. Declare a function named calculateArea that takes two arguments: length and width. It should return the area of a rectangle.
function calculateArea(length, width) {
    // Your code here
    let area = length * width;

    if (area < 0) {
        return NaN;
    }

    return area;
}

// 2. Declare a function expression named greetPerson that takes a name as an argument and logs a greeting.
var greetPerson = function (name) {
    // Your code here
    console.log(`Hello, ${name}!`);
};

/**
 * Task 9: Objects and Properties
 */

// 1. Declare an object named book with properties: title, author, and year.
var book = {
    // Your properties here
    title: "Harry Potter",
    author: "JK Rowling",
    year: 1997,
};

// 2. Log the book's title.
function logBookTitle() {
    // Your code here
    console.log(book.title);
}

// 3. Update the book's year to the current year.
function updateYear() {
    // Your code here
    book.year = 2024;
}

// 4. Add a new property to the book: genre, and assign it a value.
function addGenre() {
    // Your code here
    book.genre = "Fantasy";
}
