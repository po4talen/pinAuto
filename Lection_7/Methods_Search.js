/* Пошук в Масиві indexOf/lastIndexOf та includes
 arr.indexOf(item, from) – шукає item, починаючи з індексу from, і повертає індекс, на якому був знайдений шуканий елемент, в іншому випадку -1.
 arr.lastIndexOf(item, from) – те ж саме, але шукає справа наліво.
arr.includes(item, from) – шукає item, починаючи з індексу from, і повертає true, якщо пошук успішний. */

// let cities = [`Colombo`, `London`, `Kyiv`, `Paris`, `Warsaw`];
// // console.log(cities.indexOf(`Kyiv`));
// // console.log(cities.indexOf(`Kyiv`, 0));
// // console.log(cities.indexOf(`Warsaw`));
// // console.log(cities.indexOf(`Lviv`));

// //  console.log (cities.lastIndexOf(`Paris`));
// //  console.log (cities.lastIndexOf(`Paris`,2));

// //  console.log(cities.includes(`Kyiv`))
// console.log(cities.includes(`kyiv`))

/*  find та findIndex   let result = cities.find(function(item, index, array) {
якщо true - повертається поточний елемент і перебір закінчується
якщо всі ітерації виявилися помилковими, повертається undefined */

let users = [
    { id: 1, name: "Котик" },
    { id: 2, name: "Зайчик" },
    { id: 3, name: "Слоник" }
];

//let user = users.find(item => item.id == 2);
let user = users.find(test);
console.log(user);

function test(item){
    return item.id ==2
}



// let user2 = users.findIndex(item => item.id == 2);
// console.log(user2);


// filter - метод повертає масив елементів, що фільтруються відповідно заданій функції   . arr.filter(function(item, index, array

// let users2 = [
//     { id: 1, name: "Котик" },
//     { id: 2, name: "Зайчик" },
//     { id: 3, name: "Слоник" }
// ];

// let someUsers = users2.filter(item => item.id < 3);
// console.log(someUsers);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Метод some() повертає true, якщо принаймні один елемент масиву задовольняє умову, передану у функції

// let arr2 = [1, 2, 3, 4, 5];
// let hasEvenNumber = arr2.some(num => num % 2 === 0); // повертає true, тому що масив містить парні елементи
// let hasNegativeNumber = arr2.some(num => num < 0); // повертає false, тому що масив не містить від'ємних елементів
// console.log(hasEvenNumber); // true
// console.log(hasNegativeNumber); // false


//Метод every() повертає true, якщо всі елементи масиву задовольняють умову, передану у функції

// let arr3 = [2, 4, 6, 8];
// let allPositiveNumbers = arr3.every(num => num > 0); // повертає true, тому що всі елементи масиву є додатніми
// let NumbersMore4 = arr3.every(num => num > 4); // повертає false, тому не всі елементи більше 4
// console.log(allPositiveNumbers); // true
// console.log(NumbersMore4); // false