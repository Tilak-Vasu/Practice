// Utility Library: write utils.js with functions 
// like deepClone, sumArray, uniqueItems, and import/export.

const arr = new Array();

const n = prompt("enter num of items to be ordered: ");
for(let i=0;i<n;i++){
    const order=parseInt(prompt('enter num of each item: '));
    arr.push(order);
}

function deepClone(arr){
    // const arr1 = [];
    // arr1=[...arr]  only creates a shallow copy, the inner elements (like objects or arrays) are still referenced, not copied.
      return JSON.parse(JSON.stringify(arr)); 
}


function sumArray(arr){
    const added = arr.reduce((a,b)=>a+b,0);
    return added;
}

function uniqueItem(arr)
{
    return [...new Set(arr)];
}

const array1 = deepClone(arr)
const sumedup= sumArray(arr) //For spread, use it when you want to pass individual elements from an array as separate arguments, but not when you're passing the entire array.

const uniqueitem = uniqueItem(arr)


console.log(arr)
console.log(array1)
console.log(sumedup)
console.log(uniqueitem)

export {deepClone,sumArray,uniqueItem};


//  other.js

import {deepClone, sumArray,uniqueItem} from './utils.js';