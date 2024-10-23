const actor = {
     name: 'Ananata',
     age: 30,
     phone: '01755799935',
     money: 1233445457415
}
// if right side is an object left side of destrucring will be object as well 
// use property name as a variable thet contains the property value
const {phone, age: boyos} = actor;

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

console.log(phone);
console.log(boyos);

// array destructuring 
const numbers =[45, 99];
const [first, second] = numbers;
const [x, y] = [12, 66];

// advanced
function douleThem (a, b){
     return [a*2, b*2]
};

const [prothom, ditiyo] = douleThem(6, 9);
console.log(prothom, ditiyo);