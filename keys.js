const glass = {
  name: 'glass',
  color: "golden", 
  price: 12, 
  isCleaned: true
};

console.log(glass);

// all properties name
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]

// all property values
const valuse = Object.values(glass);
// [ 'glass', 'golden', 12, true ]

const entries = Object.entries(glass);
// array of array , tow dimensional array
/* [
  [ 'name', 'glass' ],
  [ 'color', 'golden' ],
  [ 'price', 12 ],
  [ 'isCleaned', true ]
] */
// console.log(entries);

// delete glass.isCleaned;


console.log(glass);
