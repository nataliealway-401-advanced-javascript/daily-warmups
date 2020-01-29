'use strict';

//Objects Challenge 01-28-2020

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};


let newPeople = ['Oldie', ...people, 'Garfield'];
const newStuff = {...stuff, cars: [...stuff.cars, 'BMW']};

let newState = {...state, people: ['Oldie', ...people, 'Garfield'], stuff:{...stuff, cars:[...stuff.cars, 'BMW']} };