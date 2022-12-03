const { splitLines, readFile } = require('../utils');
const { findCommonLetter, sumOfChars } = require('./utils');

const data = splitLines(readFile(__dirname));

// Part One
const errorItems = [];

data.forEach(pack => {
    const half = pack.length / 2,
        firstHalf = pack.slice(0, half),
        secondHalf = pack.slice(half);

    errorItems.push(...findCommonLetter(firstHalf, secondHalf));
});

console.log(sumOfChars(errorItems));
// First answer: 7903


// Part Two
const commonLetters = [];

for (let i = 0; i < data.length; i += 3) {
    commonLetters.push(...findCommonLetter(data[i], data[i+1], data[i+2]));
}

console.log(sumOfChars(commonLetters))
// Second answer: 2548