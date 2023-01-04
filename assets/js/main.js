let x = 10;
let y = 15;
let z = 20;

console.log(x>z && x>y); //false
console.log(x != y); //true
console.log(z<y || z>x); //true
console.log(x==z || x!=y); //true
console.log(x>=10 && y<=10); //false
console.log(x*z<100 || x*y>100); //true

let num = 5;
let anontherNum = 8;

console.log(num == anontherNum); //false
console.log(num > anontherNum); //false
console.log(num < anontherNum); //true
console.log(num >= anontherNum); //false
console.log(num <= anontherNum); //true

console.log(num == "5"); //true
console.log(num != 8); //true
console.log(num != "5"); //false
