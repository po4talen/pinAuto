/* Виведіть парні числа
Виведіть парні числа від 2 до 10, використовуючи цикл for.*/

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

/* Замініть цикл "for" на "while"
for (let i = 0; i < 3; i++) {
  alert( `число ${i}!` );} */

let i = 0;
while (i <= 3) {
    console.log(`Number ${i}!`)
    i++;
}

/*Повторяти цикл, доки ввід невірний
Напишіть цикл, який пропонує prompt ввести число більше за 100. Якщо відвідувач введе інше число – попросити ввести ще раз, і так далі.
Цикл повинен запитувати число доти, доки відвідувач не введе число, більше за 100, або не скасує ввід/введе порожній рядок.
Ми припускаємо, що відвідувач вводитиме лише числа. В цьому завданні не обов’язково реалізовувати оброблення не-числового введення. */

let enteredValue = 0;

do {
    enteredValue = prompt(`Enter the number > 100`,);
    if (enteredValue == null || enteredValue == "")
        break;
}
while (enteredValue <= 100);


/*Вивести прості числа
Напишіть код, який виводить всі прості числа в діапазоні від 2 до n.*/

let n = +prompt(`Enter a number`, 0);
mark:
for (let tempvalue = 2; tempvalue <= n; tempvalue++) {
    for (let i = 2; i < tempvalue; i++) {
        if (tempvalue % i == 0)
            continue mark;
    }
    console.log(`${tempvalue} is a simple number`)
}
