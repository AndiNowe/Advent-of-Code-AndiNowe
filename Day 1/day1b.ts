import * as fs from 'fs';

let data: Array<number> = [];

let calories: number = 0;

const allFileContents = fs.readFileSync('data/data.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(l =>  {
    if (l.length > 0) {
        calories += parseInt(l);
    } else {
        data.push(calories);
        calories = 0;
    }
});
data.push(calories);

console.log(Math.max(...data));

data.sort(function(a, b){return b-a});

console.log(data[0] + data[1] + data[2]);