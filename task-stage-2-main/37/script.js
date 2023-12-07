//Задание №1

const declaration = function (name){
    return `Привет, ${name}!`;
}
const expression1 = function (name){
    return `Привет, ${name}!`;
}
const expression2 = name => `Привет, ${name}!`;

const expression3 = name => {
    return `Привет, ${name}!`
}

console.log(declaration('Alex'));
console.log(expression1('Alex'));
console.log(expression2('Alex'));
console.log(expression3('Alex'));

//Задание №2

const  season = month => {
    if (month <= 2 || month == 12) return 'Зима';
    if (month >= 3 && month <= 5) return 'Весна';
    if (month >= 6 && month <= 8) return 'Лето';
    if (month >=9 && month <=11) return 'Осень';
}


console.log(season(9))

//Задание №3

const statsArray = (...args) => {
    console.log(`Длина массива: ${args.length}`);
    console.log(`Максимальный элемент массива: ${Math.max(...args)}`);
    console.log(`Минимальный элемент массива: ${Math.min(...args)}`)
}

statsArray(1,15,79,87,-74,165)