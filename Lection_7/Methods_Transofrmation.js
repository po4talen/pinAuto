/* map() - є одним з найбільш корисних і часто використовуваних. Він викликає функцію для кожного елемента масиву і
 повертає масив результатів виконання цієї функції. */

// let arr = [1, 2, 3];
// let doubledArray = arr.map(num => num * 2); // створює новий масив, де кожен елемент масиву arr множиться на 2
// console.log(doubledArray); // [2, 4, 6]

/* sort() - Виклик arr.sort() сортує масив “на місці”, змінюючи в ньому порядок елементів. */

// const arr2 = [3, 8, 1, 5, 2, 9, 6, 4, 7];
// // arr2.sort();
// arr2.sort(function(a, b) {
//   return b - a;
// });
//  console.log(arr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


/* reverse - Метод reverse() змінює порядок елементів масиву на протилежний */

// let arr3 = [1, 2, 3, 4, 5];
// arr3.reverse();

// console.log( arr3 ); // 5,4,3,2,1

/*  split  -  Метод split() розділяє рядок на масив елементів за заданим роздільником. */

// let str = "апельсин, банан, ананас";
// let arr4 = str.split(" ");
// console.log(arr4); 

// let str = " апельсин, банан, ананас";
// let arr4 = str.split(',').reverse().join();
// console.log(arr4); 
// console.log(Array.isArray(arr4))

/* join  - Метод join() об'єднує елементи масиву у рядок, використовуючи заданий роздільник */

// let arr5 = [`апельсин`, `банан`, `ананас`];
// let str2 = arr5.join(" ");
// console.log(str2); 


/* reduce  - Метод reduce() застосовує задану функцію до кожного елементу масиву зліва направо, зберігаючи проміжний результат 
arr.reduce(function(accumulator, item, index, array)  
accumulator - Аргумент accumulator представляє аккумулятор, який накопичує результати попередніх викликів функції-
item – черговий елемент масиву
index - представляє індекс поточного елемента у масиві.
array - представляє масив, який обробляється.
Аргументи index та array не є обов'язковими і можуть бути опущені, якщо вони не використовуються в функції*/

let arr6 = [1, 2, 3, 4, 5];
let result = arr6.reduce((sum, current) => {
    sum + current;
    console.log(sum);
});


console.log(result); // 15


//example forEach
let accum = 0;
arr6.forEach(current => accum += current);
console.log(accum);
