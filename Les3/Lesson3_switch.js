/*Перепишіть конструкцію "switch" в аналогічну з використанням "if"
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;
  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Ми підтримуємо і ці браузери' );
    break;

  default:
    alert( 'Маємо надію, що ця сторінка виглядає добре!' );} */
let browser = 'Safari';
if (browser == `Edge`) {
  alert("You've got the Edge!");
}
else if (browser == 'Chrome' || 'Safari' || 'Opera') {
  alert('Ми підтримуємо і ці браузери');
}
else if (browser == 'Opera') {
  alert('Ми підтримуємо і ці браузери');
}
else {
  alert('Маємо надію, що ця сторінка виглядає добре!');
}

/*Перепишіть умови "if" в конструкцію "switch"
let a = +prompt('a?', '');
if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );}*/

let a = +prompt('a?', '');
switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2,3')
    break;
}