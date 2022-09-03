// let a = 13;
// console.log(typeof a)
// let a = 'Md Atiqur Rahman';
// console.log(typeof a)
// let a = true;
// console.log(typeof a);
// 
const isTrue = 'false';
if(!isTrue){
console.log('hello');
}
else{
console.log('world');
}

function showNumber(x){
   x.age = 1111;
    // y= 2222;
    // z= 4444;
}

const num1 = 10;
const num2 = 15;
const num3 = 20;
// showNumber(num1,num2,num3);
// console.log(num1,num2,num3);
const details ={name: 'boyati', age: 17};
showNumber(details);
// console.log(details);
const bottle = {
     color: 'yellow',
     hold: 'water',
     price: 50
    };
const paires = Object.entries(bottle);
console.log(paires);

