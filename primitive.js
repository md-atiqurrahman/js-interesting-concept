//primitive data type
let a = 'hello';
let b = a;
// console.log(a,b);
a = 'gello';
// console.log(a,b);

//non-primitive data type

let x = {job:'web developer', salary: 10000};
let y = x;
// console.log(x,y);
// x.job ='front end developer';
y.job ='front end developer';
// console.log(x,y);

const fish = {
    name:'mrigel',
    isAvilable: true,
    location:['chadpur','mawna','barisal']
};
const {location} = fish;
console.log(location[1]);