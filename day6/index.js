const { splitLines, readFile } = require('../utils');
const [data] = splitLines(readFile(__dirname));
// console.log(data);

function getFirstMarker (distinctChars) {
    const distinctCharsIndex = distinctChars - 1;
    for (let i = distinctCharsIndex; i < data.length; i++) {
        const set = new Set(data.substring(i - distinctCharsIndex, i + 1));
        if (set.size === distinctChars) {
            console.log(`with ${distinctChars} distinct charecters, first marker after character ${i + 1}`);
            break;
        }
    }
}

getFirstMarker(4);
// First answer: 1275

getFirstMarker(14);
// Second answer: 3605