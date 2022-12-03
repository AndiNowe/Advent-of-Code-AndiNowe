import * as fs from 'fs';

const prioritiesArray: Array<string> = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let allRucksacks: Array<string> = [];
let allBadges: Array<string> = [];

const allFileContents = fs.readFileSync('data/data.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(l =>  {
    allRucksacks.push(l);
});

allBadges.push(...getGroupsOfThree());
console.log(sumPriorities(allBadges, prioritiesArray));


function getGroupsOfThree(): Array<string> {
    let currentBadge: Array<string> = [];
    for(let i = 0; i < allRucksacks.length; i+=3){
        let groupOfThree: Array<string> = [];
        groupOfThree.push(...allRucksacks.slice(i, i+3));
        currentBadge.push(getGroupBadge(groupOfThree));
    }
    return currentBadge;
}

function getGroupBadge(groupOfThree: Array<string>): string {
    let badge: string;
    let firstSack: string = groupOfThree[0];
    let secondSack: string = groupOfThree[1];
    let thirdSack: string = groupOfThree[2];

    for (let i = 0; i < firstSack.length; i++) {
        for (let j = 0; j < secondSack.length; j++) {
            if (firstSack[i]===secondSack[j]) {
                for (let k = 0; k < thirdSack.length; k++ ) {
                    if (firstSack[i] === thirdSack[k]) {
                        badge = thirdSack[k];
                        break;
                    }
                }
            }
        }
    }
    return badge;
};

function sumPriorities(allBadges: Array<string>, prioritiesArray: Array<string>): number {    
    let totalPriority: number = 0;

    for (let i = 0; i < allBadges.length; i++) {
        for (let j = 0; j < prioritiesArray.length; j++) {
            if (allBadges[i] === prioritiesArray[j]) {
                totalPriority += prioritiesArray.indexOf(prioritiesArray[j])+1;
            }
        }
    }
    return totalPriority;
}