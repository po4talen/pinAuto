/* Перевірте діапазон. Напишіть умову if, щоб перевірити, чи age знаходиться між 14 та 90 включно.
“Включно” означає, що age може досягати країв 14 або 90.*/

let age = 13;
if (age >= 14 && age <= 90){
    console.log (`Your age is ${age} and between 14 and 90 inclusive`);
}else{
    console.log (`Your age is ${age} and less than 14 or more than 90`);
}

/* Перевірте значення поза діапазоном. Напишіть умову if, щоб перевірити, чи значення age НЕ знаходиться між 14 та 90 включно.
Створіть два варіанти: перший з оператором НЕ !, другий — без нього.*/

if (!(age >= 14 && age <= 90))
{
    console.log (`true`);
}else{
    console.log (`false`);
}

if (age < 14 || age > 90);

/* Напишіть код, який запитує логін за допомогою prompt.

Якщо відвідувач вводить "Admin", тоді запропонуйте за допомогою prompt ввести пароль. Якщо введено порожній рядок або натиснуто Esc – показати “Скасовано”. Якщо введено інший рядок – тоді покажіть “Я вас не знаю”.

Пароль перевіряється наступним чином:
Якщо він дорівнює “Господар”, тоді покажіть “Ласкаво просимо!”,
Інший рядок – покажіть “Неправильний пароль”,
Для порожнього рядка, або якщо введення було скасовано, покажіть “Скасовано”. */

let username = prompt(`Enter your username`, `Admin`);
let password;

if (username == `Admin`){
    password = prompt(`Enter your password`,'TheMaster');

    if (password == `TheMaster`){
        alert('Welcome');
    }else if (password == null || password == ''){
        alert('Canelled');
    }else{
        alert('Wrong password');
    }

}else if (username == null || username == ''){
    alert('Cancelled')
}else alert(`I don't know you`);

