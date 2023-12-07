const str = "всеМ прИвЕт, прИяТно ПоЗНакоМиТьсЯ!".toLowerCase();

var firstchar = str.charAt(0).toUpperCase();
let result = firstchar + str.slice(1);
console.log(result)


result = result.replace("привет","пока");
console.log(result)

console.log(result.length);
console.log(result.charAt(result.length - 1))