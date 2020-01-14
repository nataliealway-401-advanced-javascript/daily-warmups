// Arrays
let array = [1,2,3,4,5,6,7,8,9,10];

//FORLOOP
function forLoop(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}
forLoop(array);

//WHILELOOP
function whileLoop(array){
    let i = 0;
    while(i < array.length){
      console.log(array[i])
      i++;
    }
  }
  whileLoop(array);

// .map() 
function map(array, callBack){
   let newArray = [];
   for(let i = 0; i < array.length; i++){
     newArray.push(callBack(array[i]));
     } return newArray;
}

// .reduce()
function reduce(array, callBack){
    newValue = 0;
    for(let i = 0; i < array.length; i++){
        newValue = callBack(newValue,array[i])
    }
    return newValue
}

let reducedValues = (acc, curr) => {
    return acc += curr;
}

console.log(reduce(array, reducedValues));

// .filter()
function filter(array, callBack) {
    let newArray = [];
    for(let i =0; i < array.length; i++){
      if(callBack(array[i])) { newArray.push(array[i])}
    }
    return newArray;
  }

