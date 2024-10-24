// for of use on array or string not in object 
// for in use on object


const numbers = [1, 6, 8, 4];
// for(let i = 0; i < numbers.length; i++){}
// while

for (const num of numbers) {
     // console.log(num);
};

const nobab = 'Siraj Ud Doula';
for (const char of nobab) {
     // console.log(char);
}

const glass = {
     name: 'glass',
     color: "golden",
     price: 12,
     isCleaned: true
};

// for(const key of glass){
//      console.log(key);
// }

for (const key in glass) {
     const value = glass[key];
     // console.log(key,value);
};

// optional
const keys = Object.keys(glass);
// console.log(keys);

for (const key of keys) {
     const value = glass[key];
     // console.log(key, value);
};


// practice problem 
// 1
const n = (n, x, y) => {
     const value = n * x * y;
     return value;
};

const m = n(5, 6, 9);
// console.log(m);

// 2
const string = `
     i love rice,
     i love chiken ,
     i love jous
`;
// console.log(string);

// 3
const f = (a, b = 200) => {
     const c = a + b;
     return c;
}

const d = f(100);
console.log(d);
