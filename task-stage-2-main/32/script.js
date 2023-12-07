const value1 = "25.3";
const value2 = "786.867";


const result = Number(value1) + Number(value2);

console.log(result)

const afterRound = Math.ceil(result);
console.log(afterRound);

const forFormat = new Intl.NumberFormat('ru-RU',{
    style: 'currency',
    currency: 'RUB'
});

const formattedResult = forFormat.format(afterRound)
console.log(formattedResult);