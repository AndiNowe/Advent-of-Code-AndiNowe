import * as fs from 'fs';

const prioritiesArray: Array<string> = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let listOfDuplicates: Array<string> = [];

const allFileContents = fs.readFileSync('data/data.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(l =>  {
    listOfDuplicates.push(listRuckSackItems(getItemsRight(l), getItemsLeft(l)));
});

console.log(sumPriorities(listOfDuplicates, prioritiesArray));

function listRuckSackItems(itemsRight: string, itemsLeft: string): string{

    for (let i = 0; i < itemsRight.length; i++) {
        for (let j = 0; j < itemsLeft.length; j++) {
            if (itemsRight[i] === itemsLeft[j]) {
                return itemsRight[i];
            }
        }
    }
    return null;
};

function sumPriorities(listOfDuplicates: Array<string>, prioritiesArray: Array<string>): number {    
    let totalPriority: number = 0;

    for (let i = 0; i < listOfDuplicates.length; i++) {
        for (let j = 0; j < prioritiesArray.length; j++) {
            if (listOfDuplicates[i] === prioritiesArray[j]) {
                totalPriority += prioritiesArray.indexOf(prioritiesArray[j])+1;
            }
        }
    }
    return totalPriority;
}

function getItemsRight(items: string): string {
    let itemsRight: string = items.slice(0, (items.length)/2);
    return itemsRight;
};

function getItemsLeft(items: string): string {
    let itemsLeft: string = items.slice((items.length)/2, items.length);;
    return itemsLeft;
};