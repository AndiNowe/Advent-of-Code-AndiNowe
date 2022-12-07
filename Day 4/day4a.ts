import * as fs from 'fs';

let counter: number = 0;

const allFileContents = fs.readFileSync('data/data.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(l =>  {
    arrangeIntervals(l);
});

console.log(counter);

function arrangeIntervals(line: string): void {

    let twoIntervalArray: Array<string> = line.split(",");
    let firstInterval: Array<string> = twoIntervalArray[0].split("-");
    let secondInterval: Array<string> = twoIntervalArray[1].split("-");

    let x1: number = parseInt(firstInterval[0]);
    let x2: number = parseInt(firstInterval[1]);
    let y1: number = parseInt(secondInterval[0]);
    let y2: number = parseInt(secondInterval[1]);

    if ((x1 <= y1 && x2 >= y2) || (y1 <= x1 && y2 >= x2)) {
        counter++;
    }
};