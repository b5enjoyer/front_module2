const fructs = ['Банан', 'Арбуз', 'Яблоко', 'Виноград', 'Груша'];
fructs.splice(fructs.indexOf('Яблоко'), 1);
fructs.splice(0, 1);
fructs.pop();

console.log(fructs);