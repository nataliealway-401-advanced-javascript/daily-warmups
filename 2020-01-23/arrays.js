'use strict';

// Array Challenge 01-23-2020

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forLoop -------------------------------
function forLoop(array){
    for(let i = 0; i < array.length; i++){
    console.log(array[i])
  }
}

// whileLoop -----------------------------
function whileLoop(array){
    i = 0;
    while(array < length){
        console.log(array[i])
        i++;
    }
}
whileLoop();

// .map() --------------------------------
function map(array, cb){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
      newArray.push(cb(array[i]));
      } return newArray;
 }
 
 // .reduce() ------------------------------
 function reduce(array, cb){
     newValue = 0;
     for(let i = 0; i < array.length; i++){
         newValue = cb(newValue,array[i])
     }
     return newValue
 }
 
 let reducedValues = (acc, curr) => {
     return acc += curr;
 }
 
 console.log(reduce(array, reducedValues));
 
 // .filter() ------------------------------
 function filter(array, cb) {
     let newArray = [];
     for(let i =0; i < array.length; i++){
       if(cb(array[i])) { newArray.push(array[i])}
     }
     return newArray;
   }