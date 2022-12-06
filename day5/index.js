const { splitBlankLines, splitLines, readFile } = require('../utils');
const [visualStacks, procedures] = splitBlankLines(readFile(__dirname));
const stacks = splitLines(visualStacks).map(line => line.split(''));

const stacksArr = [];
for (let lineIndex = stacks.length - 1; lineIndex >= 0; lineIndex--) {
    let currStack = 0;
    const currLine = stacks[lineIndex];

    for (let i = 1; i < currLine.length; i += 4) {
        const letter = currLine[i];
        const badChars = ['', ' ', '[', ']'];

        if (!stacksArr[currStack]) stacksArr.push([]);
        if (!badChars.includes(letter)) stacksArr[currStack].push(letter);
        
        currStack++;
    }
};

// Part 1
const part1Stacks = JSON.parse(JSON.stringify(stacksArr));
splitLines(procedures).forEach(procedure => {
    const [_, numOfMoves, removalStack, targetStack] = procedure.replaceAll(' ', '').split(/move|from|to/);
    for (let i = 1; i <= numOfMoves; i++) {
        const crate = part1Stacks[removalStack - 1].pop();
        part1Stacks[targetStack - 1].push(crate);
    }
});

console.log(part1Stacks.reduce((acc, stack) => acc += stack.at(-1), ''));

// First answer: BWNCQRMDB

// Part 2
const part2Stacks = JSON.parse(JSON.stringify(stacksArr));
splitLines(procedures).forEach(procedure => {
    const [_, numOfCrates, removalStack, targetStack] = procedure.replaceAll(' ', '').split(/move|from|to/);
    const crates = part2Stacks[removalStack - 1].splice(-numOfCrates);
    part2Stacks[targetStack - 1].push(...crates);
});

console.log(part2Stacks.reduce((acc, stack) => acc += stack.at(-1), ''));

// Second answer: NHWZCBNBF