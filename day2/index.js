const { splitLines, readFile } = require('../utils');

const data = splitLines(readFile(__dirname));

// console.log(data);

class Game {
    implementMap = {
        A: 'rock',
        X: 'rock',
        B: 'paper',
        Y: 'paper',
        C: 'scissors',
        Z: 'scissors',
    };
    
    winnerMap = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper',
    };

    scores = {
        lose: 0,
        draw: 3,
        win: 6,
        rock: 1,
        paper: 2,
        scissors: 3,
    };

    constructor(moves) {
        this.moves = moves.split(' ');
        this.score = 0;
    }

    playGame () {
        const opponentMove = this.implementMap[this.moves[0]];
        const playerMove = this.implementMap[this.moves[1]];
        
        let result = 'lose';
        if (opponentMove === playerMove) result = 'draw';
        else if (this.winnerMap[opponentMove] !== playerMove) result = 'win';
        
        this.score += this.scores[result] + this.scores[playerMove];
    }
}

let score = 0;

for (let i = 0; i < data.length; i++) {
    const game = new Game(data[i]);
    game.playGame();
    score += game.score;
}

console.log('answer 1:', score);



class Game2 {
    winnerMap = {
        A: 'C',
        B: 'A',
        C: 'B',
    };

    scores = {
        X: 0,
        Y: 3,
        Z: 6,
        A: 1,
        B: 2,
        C: 3,
    };

    constructor(moves) {
        this.moves = moves.split(' ');
        this.score = 0;
        this.result = this.moves[1];
        this.playerMove = undefined;
    }

    calculateScore () {
        this.score += this.scores[this.result] + this.scores[this.playerMove];
    }
    
    determineMove () {
        if (this.result === 'Y') this.playerMove = this.moves[0];
        else if (this.result === 'X') this.playerMove = this.winnerMap[this.moves[0]];
        else if (this.result === 'Z') this.playerMove = Object.entries(this.winnerMap).find(([_, value]) => value === this.moves[0])[0];
    }

    playGame () {
        this.determineMove();
        this.calculateScore();
        return this.score;
    }
}

let score2 = 0;

for (let i = 0; i < data.length; i++) {
    const game = new Game2(data[i]);
    game.playGame();
    score2 += game.score;
}

console.log('answer 2:', score2);


// First answer: 12586
// Second answer: 13193