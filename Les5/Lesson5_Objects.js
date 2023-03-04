/*Привіт, object
Створіть порожній об’єкт user. Додайте властивість name зі значенням Іван. Додайте властивість surname зі значенням Сміт.
Змініть значення name на Петро. Видаліть властивість name з об’єкта. */

let user = {};
user.name = `Ivan`;
user.surname = `Smith`;
console.log(user);

user.name = `Petro`;
console.log(user);

delete user.name;
console.log("name" in user);

/*Перевірка на порожнечу: Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false. */

let schedule = {};
console.log(isEmpty(schedule));

schedule["8:30"] = "Get up";
console.log(isEmpty(schedule));

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

/* Сума властивостей об’єкта */

let salaries = {
    Igor: 100,
    Anna: 160,
    Petro: 130
}

let sum = totalSalaries(salaries);
console.log(sum);

function totalSalaries(obj) {
    let total = 0;
    for (let key in obj) {
        total += obj[key];
    }
    return total;
}