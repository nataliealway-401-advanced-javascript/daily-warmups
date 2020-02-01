'use strict'

//object starter code
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
const newStuff = {...stuff, cars: [...stuff.cars, 'truck']};

let newState = {...state, people: ['Oldie', ...people, 'Garfield'], stuff:{...stuff, cars:[...stuff.cars, 'truck']} };