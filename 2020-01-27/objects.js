'use strict'
//starterCode ___________________
const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

//Objects __________________
let newPeople = ['Oldie', ...people, 'Garfield'];
const newStuff = {...stuff, cars: [...stuff.cars, 'Jeep']};

let newState = {...state, people: ['Oldie', ...people, 'Garfield'], stuff:{...stuff, cars:[...stuff.cars, 'Jeep']} };