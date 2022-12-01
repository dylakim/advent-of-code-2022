const { splitBlankLines, readFile } = require('../utils');

const data = splitBlankLines(readFile(__dirname));

const totalCalsByElf = data.map(elf => {
    elfArray = elf.split(/\r?\n/);
    calCount = elfArray.reduce((acc, calories) => {
        if (calories != '') return parseInt(acc) + parseInt(calories);
        return parseInt(acc);
    });
    return parseInt(calCount);
});

totalCalsByElf.sort((a, b) => a - b);

const mostCals = totalCalsByElf.at(-1);
const top3Elves = totalCalsByElf.splice(-3);
const totalTop3Cals = top3Elves.reduce((acc, calories) => acc + calories);

// console.log(data);
console.log(mostCals)
console.log(totalTop3Cals)


// First answer: 74394
// Second answer: 212836