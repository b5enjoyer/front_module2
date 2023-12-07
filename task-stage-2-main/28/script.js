const undef = undefined;
const zero = null;
const bool = false;
const num = 882;
const bignum = BigInt(8888882);
const symb = Symbol("B");
const str = "B882CC124";
const obj = new Object({name: 'Alex'});
const array = [1,2,3];
const func = function(){return "Hello"};
const date = new Date();

console.log(undef);
console.dir(undef);

console.log(zero);
console.dir(zero);

console.log(bool);
console.dir(bool);

console.log(num);
console.dir(num);

console.log(bignum);
console.dir(bignum);

console.log(symb);
console.dir(symb);

console.log(str);
console.dir(str);

console.log(obj);
console.dir(obj);

console.log(array);
console.dir(array);

console.log(func);
console.dir(func);

console.log(date);
console.dir(date);

// ------------------------- Задача 2

console.log(typeof undef);
console.log(typeof zero);
console.log(typeof bool);
console.log(typeof num);
console.log(typeof bignum);
console.log(typeof symb);
console.log(typeof str);
console.log(typeof obj);
console.log(typeof array);
console.log(typeof func);
console.log(typeof date);
