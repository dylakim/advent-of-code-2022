const { splitLines, readFile } = require('../utils');
const data = splitLines(readFile(__dirname));
// console.log(data);

// Part 1
const containedRanges = data.filter(pairStr => {
    const [[a1, a2], [b1, b2]] = pairStr
        .split(',')
        .map(range => range.split('-'))
        .map(range => [parseInt(range[0]), parseInt(range[1])]);

    if (a1 <= b1 && a2 >= b2) return true;
    if (a1 >= b1 && a2 <= b2) return true;
    return false;
});

console.log(containedRanges.length);
// First answer: 580

// Part 2
const overlappingRanges = data.filter(pairStr => {
    const [[a1, a2], [b1, b2]] = pairStr
        .split(',')
        .map(range => range.split('-'))
        .map(range => [parseInt(range[0]), parseInt(range[1])]);

    if ((a1 >= b1 && a1 <= b2) || (a2 >= b1 && a2 <= b2)) return true;
    if ((b1 >= a1 && b1 <= a2) || (b2 >= a1 && b2 <= a2)) return true;
    return false;
});

console.log(overlappingRanges.length);
// Second answer: 895