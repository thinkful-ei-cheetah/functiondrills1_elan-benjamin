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