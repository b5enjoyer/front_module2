const undef = undefined;
const zero = null;
const bool = false;
const num = 882;
const bigNum = BigInt(8888882);
const symb = Symbol("B");
const str = "B882CC124";
const obj = new Object({name: 'Alex'});
const array = [1,2,3];
const func = function(){return "Hello"};
const date = new Date();


console.log(Number(undef));
console.log(Number(zero));
console.log(Number(bool));
console.log(Number(num));
console.log(Number(bigNum));
console.log(Number(str));
console.log(Number(obj));
console.log(Number(array));
console.log(Number(func));
console.log(Number(date));
// --------------------------------------

console.log(String(undef));
console.log(String(zero));
console.log(String(bool));
console.log(String(num));
console.log(String(bigNum));
console.log(String(symb));
console.log(String(str));
console.log(String(obj));
console.log(String(array));
console.log(String(func));
console.log(String(date));

//---------------------------------------

console.log(Boolean(undef));
console.log(Boolean(zero));
console.log(Boolean(bool));
console.log(Boolean(num));
console.log(Boolean(bigNum));
console.log(Boolean(symb));
console.log(Boolean(str));
console.log(Boolean(obj));
console.log(Boolean(array));
console.log(Boolean(func));
console.log(Boolean(date));