const text = prompt('Введите текст');
const start = prompt('Начальная позиция');
const end = prompt('Конечная позиция');

const result = text.slice(start,end)

alert(result);

const text2 = prompt('Введите текст для "обрезки"');
const word = prompt('До какого слова обрезать');

const result2  = (text2.slice(0,text2.indexOf(word)))

alert(result2);


