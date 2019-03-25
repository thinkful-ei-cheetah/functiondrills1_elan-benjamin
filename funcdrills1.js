'use strict';

function createGreeting(name, age) {
  if (!name || !age) {
    throw new Error('Arguments not valid');
  } else if (typeof name !== 'string' || typeof age !== 'number') {
    throw new TypeError();
  }
  const ageCalc = getYearofBirth(age);
  return `Hi my name is ${name} and I am ${age}. I was born in ${ageCalc}.`;
}

function getYearofBirth(age){
  if (age <= 0) {
    throw new Error('Age can not be negative');
  }
  return 2019 - age;
}


try {
  const greeting1 = createGreeting('Ben', 15);
  console.log(greeting1);
} catch(e) {
  console.log(e.message);
}

