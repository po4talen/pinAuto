//Напишіть функція яка приймає 2 параметри додає їх та вертає їх суму (придумав сам не з книжки)

// let getSum1 = (a, b) => a + b;
function getSum1(a, b) {
    return a + b;
}
console.log(getSum1(5, 2))

//Перепишіть функцію, використовуючи '?' або '||'

function getSum(a, b) {
    return (isNaN(a) || isNaN(b)) ? `Value is Not a Number` : a + b
}
console.log(getSum(2, 5));
console.log(getSum("sdf", 5));

//Функція min(a, b)

function getMinValue(a, b) {
    return (a < b) ? a : b
}

console.log(getMinValue(2, 4));
console.log(getMinValue(4, 1));
console.log(getMinValue(10, 10));