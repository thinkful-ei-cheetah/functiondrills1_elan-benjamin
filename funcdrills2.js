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

function playGame(choice) {
  const randomNo = Math.floor(Math.random() * 3) + 1;
  const enemy = randomNo;
  if (choice === enemy) {
    alert('It\'s a tie');
  }
  if(choice === 1 && enemy === 2) {
    alert('You are the loser! Paper beats rock.');
  }
  if(choice === 1 && enemy === 3) {
    alert('You are the winner! Rock beats scissors.');
  }
  if(choice === 2 && enemy === 1) {
    alert('You are the winner! Paper beats rock.');
  }
  if(choice === 2 && enemy === 3) {
    alert('You are the loser! Scissors beat paper.');
  }
  if(choice === 3 && enemy === 2) {
    alert('You are the winner! Scissors beat paper.');
  }
  if(choice === 3 && enemy === 1) {
    alert('You are the loser! Rock beats scissors.');
  }
  return `Player: ${choice}, Computer: ${enemy}`;
}