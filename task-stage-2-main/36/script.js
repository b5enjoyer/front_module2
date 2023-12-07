const baseNumber = 10;

const arrayNumber = Array.from(Array(baseNumber).keys())
console.log(arrayNumber);

{
    var sum = 0;
    for (let i = 0; i < arrayNumber.length; i++){
        sum += Math.pow(arrayNumber[i],2);
    }
    console.log(sum);
}

{
    var sum = 0;
    for (let i of arrayNumber){
        sum += Math.pow(i,2);
    }
    console.log(sum);
}

{
    var sum = 0;
    arrayNumber.forEach(item => sum += Math.pow(item,2));
    console.log(sum);
}

{
    const sum = arrayNumber.reduce((
        accumulator,currentValue) => accumulator + Math.pow(currentValue,2),0);
    console.log(sum);
}