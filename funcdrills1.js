'use strict';

function createGreeting(name, age) {
  const yearOfBirth = 2019 - age;
  return 'Hi my name is Elan and I am 24. I was born in ${yearOfBirth}';
}

const greeting1 = createGreeting();
console.log(greeting1);

