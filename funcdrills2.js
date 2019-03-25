'use strict';

function jediName(firstName, lastName) {
  // slice first three letters of last name, maintaining case, 
  // and then add first two letters of first name
  return lastName.slice(0, 3) + firstName.slice(0,2);
}

function beyond(num) {
  if(num === Infinity) {
    console.log('And beyond');
  } else if (num > 0) {
    console.log('To infity');
  } else if (num < 0) {
    console.log('To negative infinity');
  } else if (num === 0) {
    console.log('Staying home');
  }
}

beyond(Infinity);

function decode(str) {
  if (str.length < 5) {
    throw new Error('Please enter a five letter word');
  }
  if (str[0] === 'a') {
    return str[1];
  } else if (str[0] === 'b') {
    return str[2];
  } else if (str[0] === 'c') {
    return str[3];
  } else if (str[0] === 'd') {
    return str[4];
  } else {
    return ' ';
  } 
}