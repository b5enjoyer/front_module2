const arr = [1, 2, 'Hello', () => 100, { age: 100 }, 200, 'red', null, 2.5, 50, 7.999];

const filteredArr = arr.filter(element => typeof element === 'number' && (Number.isInteger(element) || Number.isFinite(element)));
// const filteredArr = arr.filter(element => Number.isFinite(element));

const sortedArr = [...filteredArr].sort((a, b) => b - a);

console.log("Исходный массив:", arr);
console.log("Отфильтрованный массив:", filteredArr);
console.log("Отсортированный массив в порядке убывания:", sortedArr);