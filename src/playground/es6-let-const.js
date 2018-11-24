var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

// following will work

const fullName = 'Jen Mead';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);

// but, following will not

// const fullName = 'Jen Mead';

// if (fullName) {
//   let firstName = fullName.split(' ')[0];
//   console.log(firstName);
// }

// console.log(firstName);