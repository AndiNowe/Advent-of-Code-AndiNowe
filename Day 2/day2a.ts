import * as fs from 'fs';

//A for Rock, B for Paper, and C for Scissors
//X for Rock, Y for Paper, and Z for Scissors

// The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) 
// plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

let points: number = 0;

const allFileContents = fs.readFileSync('data/data.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(l =>  {
    points += getPoints(l);
});

function matchResult(match: string) {
    if (match === "A X" || match === "B Y" || match === "C Z") {
        getShapePoints(match);
        return 3;
    } else if (match === "C X" || match === "A Y" || match === "B Z") {
        getShapePoints(match);
        return 6;
    } else if (match === "B X" || match === "C Y" || match === "A Z") {
        getShapePoints(match);
        return 0;
    } 
};

function getShapePoints(match: string) {
    if (match[match.length-1] === "X") {
        return 1;
    } else if (match[match.length-1] === "Y") {
        return 2;
    } else if (match[match.length-1] === "Z") {
        return 3;
    }
};

function getPoints(match: string) {
    return matchResult(match) + getShapePoints(match);
}

console.log(points);