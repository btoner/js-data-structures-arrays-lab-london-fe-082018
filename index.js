// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop(length-1);
}

function destructivelyRemoveFirstDriver(){
  drivers.shift(0);
}

return [name, ...drivers];

//const appendDriver = ['']

//function appendDriver(name){
//  drivers.
//}