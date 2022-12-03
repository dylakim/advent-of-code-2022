const alphabet = createAlphabet();

function createAlphabet () {
    const az = new Array(26);
    const AZ = new Array(26);

    for (let i = 0; i < 26; i++) {
        az[i] = String.fromCharCode(i + 97);
        AZ[i] = String.fromCharCode(i + 65);
    }

    return [...az, ...AZ];
}

function findCommonLetter (arr1, ...args) {
    const commonLetters = new Set();
    
    for (let i = 0; i < arr1.length; i++) {
        const letter = arr1[i];
        let failed = false;

        for (let j = 0; j < args.length; j++) {
            if (!args[j].includes(letter)) {
                failed = true;
                break;
            }
        }

        if (!failed) commonLetters.add(letter);
    }

    return Array.from(commonLetters);
}

function sumOfChars (arr) {
    return arr.reduce((acc, item) => acc + alphabet.indexOf(item) + 1, 0);
}

module.exports = {
    findCommonLetter,
    sumOfChars,
};
