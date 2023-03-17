/*Створити масив з даними у відповідній послідовності 'Harry Potter', 'Godfather', 'Scarface', 'Casino'.
Перебрати масив за допомогою цикла(for of), якщо довжина масива більше 3, то видалити перше значення з масиву.*/

let books = ['Harry Potter', 'Godfather', 'Scarface', 'Casino'];
console.log(books);

cutArray(3, books);

console.log(books);


function cutArray(cut, arr) {
    for (let key of arr) {
        if (arr.length > 3) {
            arr.shift();
        }
    }
}