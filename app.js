//  Problem 1: Let’s play a mind game
/* This is a function which is taking a number input. This task has multiple operations.validation is must.*/

function mindGame(numbers) {
    if (typeof numbers !== 'number' || numbers <= 0) {
        return 'please Input a Number';
    }
    const number = ((((numbers * 3) + 10) / 2) - 5);
    return number;
}

// console.log(mindGame(5));



// Problem 2: Finding even or odd
/* This is a function which is taking input string. This task is a Javascript string finding even or odd. validation is must.*/

function evenOdd(stringType) {
    if (typeof stringType !== "string") {
        return "Please input a String";
    }

    if (stringType.length % 2 === 0) {
        return 'even'
    } else {
        return 'odd';
    }
}

// console.log(evenOdd('Phero'));

// Problem 3: Is Less or Greater than seven
// This is a function which is taking a number input.you have to return your answer based on the input number is less or Greater than seven. validation is must.

function isLGSeven(number) {
    if (typeof number !== "number") {
        return "Please input a Number";
    }

    const result = number;
    if (7 >= result) {
        return number - 7;
    } else {
        return result * 2;
    }

}

console.log(isLGSeven(7));

// Problem 4: Finding Bad data
/* This is a javascript function which in taking an array .need to find out How many bad data (negative number) is in the array. validation is must.*/

function findingBadData(numbers) {
    if (!Array.isArray(numbers)) {
        return "please input a array";
    }

    let badDataCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== "number") {
            return "not a number.";
        }
        if (numbers[i] < 0) {
            badDataCount++;
        }
    }
    return badDataCount;
}

const array = [2, -5, -7, -13];


// console.log(findingBadData(array));


// Problem 5: Convert your gems into diamond
/*This is a JavaScript function that accepts 3 parameters.Then makes a program with multiple mathematical operations. validation is a must.*/

function gemsToDiamond(friendOne, friendTwo, friendThree) {
    if (typeof friendOne != 'number' || typeof friendTwo != 'number' || typeof friendThree != 'number') {
        return 'Please input all numbers';
    }
    const friendOneGems = 21;
    const friendTwoGems = 32;
    const friendThreeGems = 43;

    const friendsOneDiamond = friendOne * friendOneGems;
    const friendsTowDiamond = friendTwo * friendTwoGems;
    const friendsThreeDiamond = friendThree * friendThreeGems;

    const totalDiamond = friendsOneDiamond + friendsTowDiamond + friendsThreeDiamond;


    if (totalDiamond > 1000 * 2) {
        return totalDiamond - 2000;
    } else {
        return totalDiamond;
    }
}

console.log(gemsToDiamond(100, 200, 300));