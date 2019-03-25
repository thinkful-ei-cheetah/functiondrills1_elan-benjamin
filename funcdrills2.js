'use strict';

function jediName(firstName, lastName) {
  // slice first three letters of last name, maintaining case, 
  // and then add first two letters of first name
  return lastName.slice(0, 3) + firstName.slice(0,2);
}

