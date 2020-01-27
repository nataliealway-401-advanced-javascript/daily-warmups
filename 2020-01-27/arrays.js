'use strict';
//Array______________________
let array = [1,2,3,4,5,6,7,8,9,10];
//forLoop____________________
function forLoop(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
//whileLoop___________________
function whileLoop(array) {
    let i = 0;
    while(i < array.length){
        console.log(array[i])
        i++
    }
}

//.map()_________________________
function map(array, callback){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        newArr.push(callback(array[i]))
    } return newArr;
}


//.filter()_______________________
function filter(array, callback){
        let newArr = [];
        for(let i =0; i < array.length; i++){
          if(callback(array[i])) { newArr.push(array[i])}
        }
        return newArray;
      }


//.reduce()_______________________
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