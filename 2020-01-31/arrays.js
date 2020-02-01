'use strict';
//Array

let array = [1,2,3,4,5,6,7,8,9,10];

//forLoop
function forLoop(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
//whileLoop
function whileLoop(array) {
    let i = 0;
    while(i < array.length){
        console.log(array[i])
        i++
    }
}

//.map()
function map(array, callback){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        newArr.push(callback(array[i]))
    } return newArr;
}


//.filter()
function filter(array, callback){
        let newArr = [];
        for(let i =0; i < array.length; i++){
          if(callback(array[i])) { newArr.push(array[i])}
        }
        return newArray;
      }


//.reduce()
function reduce(array, callback) {
    let newValue = 0;
    for(let i = 0; i < array.length; i++){
        newValue = callback(newValue, array[i]);
    } return newValue;
}
let reducedValues = (acc, curr) => {
    return acc += curr;
}
console.log(reduce(array, reducedValues));