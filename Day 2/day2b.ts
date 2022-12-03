import * as fs from 'fs';

//A for Rock, B for Paper, and C for Scissors
//X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win

// The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) 
// plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

let points: number = 0;
let result: string = "";

const allFileContents = fs.readFileSync('data/test.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(l =>  {
    points += getPoints(l);
});

function matchResult(match: string) {
    if (match === "B Y" || match === "C Y" || match === "A Y") {
        result = "draw";
        getShapePoints(match, result);
        return 3;
    } else if (match === "C Z" || match === "A Z" || match === "B Z") {
        result = "win";
        getShapePoints(match, result);
        return 6;
    } else if (match === "B X" || match === "A X" || match === "C X") {
        result = "lose";
        getShapePoints(match, result);
        return 0;
    } 

};

function getShapePoints(match: string, result: string) {
    
    if (result === "draw") {
        if (match[0] === "A") {
            return 1;
        } else if (match[0] === "B") {
            return 2;
        } else if (match[0] === "C") {
            return 3;
        }
    } else if (result === "win") {
        if (match[0] === "A") {
            return 2;
        } else if (match[0] === "B") {
            return 3;
        } else if (match[0] === "C") {
            return 1;
        }
    } else if (result === "lose") {
        if (match[0] === "A") {
            return 3;
        } else if (match[0] === "B") {
            return 1;
        } else if (match[0] === "C") {
            return 2;
        }
    }
};

function getPoints(match: string) {
    return matchResult(match) + getShapePoints(match, result);
}

console.log(points);