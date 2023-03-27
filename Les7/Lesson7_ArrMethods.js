/*Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи більші-рівні a та менші-рівні b і віддає масив цих елементів.
Функція повинна повертати новий масив і не змінювати вихідний */


let arr2 = [2, 3, 4, 5, 9, 11, 1];

let filtered = filterRange(arr2, 1, 4);

//function with arr.filter
function filterRange(arr, a, b) {
    return arr.filter((item) => (item >= a && item <= b))
}

//function with arr.map
function filterRange2(arr, a, b) {
    let temp = arr.map(function (item) {
        if (item >= a && item <= b) {
            return item;
        }
    }).filter((item) => item != null);
    return temp;
}
console.log(filtered);

/* Створити функцію palindrome, яка повертає булеве значення. Паліндромом називають слово чи фразу, яка читається в обидві сторони однаково. Наприклад: anna
function(str) {	return your_code} */


console.log(palindrome(`anna`));
console.log(palindrome(`радар`));
console.log(palindrome(`роберт`));

function palindrome(str) {
    let reversStr = str.split("").reverse().join("");
    return str === reversStr;
}
