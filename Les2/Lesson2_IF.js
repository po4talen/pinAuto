
/* Використовуючи конструкцію if..else, напишіть код, що запитує: ‘Яка “офіційна” назва JavaScript?’
Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”, в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!” */

let jsname = prompt("What is the official name of JavaScript?", "");

if(jsname == "ECMAScript"){
    alert("Correct!");
}
else{
    alert("Don't know know? ECMAScript!");
}
    
/* Використовуючи if..else, напишіть код, що отримує число за допомогою prompt і потім виводить повідомлення alert:
1, якщо значення більше нуля,
-1, якщо меньше нуля,
0, якщо дорівнює нулю.
У цьому завданні ми припускаємо, що введенне значення завжди є числом. */

let number = prompt('Enter any number', '');

if (number > 0){
    alert(1);
}
else if(number < 0){
    alert(-1);
}
else{
    alert(0);
}

/* Перепишіть конструкцію if, використовуючи умовний оператор '?':
let result;
if (a + b < 4) {
  result = 'Нижче';
} else {
  result = 'Вище';
} */

let a = 2, b = 1;
let result;
result = (a + b < 4) ? "Нижче" : "Вище";
console.log(result);

/* Перепишіть if..else, використовуючи декілька тернарних операторів '?'.
let message;

if (login == 'Працівник') {
  message = 'Привіт';
} else if (login == 'Директор') {
  message = 'Вітаю';
} else if (login == '') {
  message = 'Немає логіну';
} else {
  message = '';
} */

let message;
message = (login == 'Працівник') ? 'Привіт' : (login == 'Директор') ? 'Вітаю' : (login == '') ? 'Немає логіну' : '';