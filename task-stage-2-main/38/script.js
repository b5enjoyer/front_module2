//Задание №1

const sum = (num, type='odd') => {
    let result = 0
    if (typeof num === 'number' || typeof num === 'bigint'){
        if (type=='odd'){
            for (let i = 1; i <= num + (num % 2); i += 2) result += i;
            return result;
        }
        if (type == 'even'){
            for (let i = 0; i <= num - (num % 2); i += 2) result += i;
            return result;
        }
    }
    else return NaN;
}

console.log(sum(6))
console.log(sum(6,'even'))
console.log(sum("Test")) 

//Задание №2

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const calculate = (x,y,func) => func(x,y);

console.log(calculate(1,2,add))
console.log(calculate(1,2,subtract))
console.log(calculate(1,2,multiply))
console.log(calculate(1,2,divide))


const resultAdd = calculate(1, 2, add);
// Задание №3

const func = (num) =>{
    return func2 = (num2) =>{
        return func3 = (num3) =>{
            return num3+num2+num
        }
    }
}

console.log(func(5)(2)(3))