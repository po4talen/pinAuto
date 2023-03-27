//Додавання/видалення елементів:
//Метод splice() дозволяє видалити, додавати або замінити елементи в масиві  Синтаксис: arr.splice(start[, deleteCount, elem1, ..., elemN])

// починаючи з індексу 1 видалимо 1 елемент
let arr = [`Я`, `люблю`, `JavaScript`];
arr.splice(1, 1);
console.log(arr);

// видалимо 2  елементи з індексу 1 і замінимо їх іншими
let arr2 = [`Я`, `вивчаю`, `JavaScript`, `в`, `цей`, `момент`];
arr2.splice(1, 2, `провожу`, `лекцію`, `про`, 'методи');
console.log(arr2);

// метод splice повертає масив видалених елементів
let arr3 = [`Я`, `вивчаю`, `JavaScript`, `в`, `цей`, `момент`];
let removed = arr3.splice(3, 3);
console.log(removed);

//Метод splice також може вставляти елементи без будь-яких видалень. 
let arr4 = [`Я`, `вивчаю`, `JavaScript`];
arr4.splice(2, 0, `цікаву`, `мову`);
console.log(arr4);


// slice  - Cинтаксис arr.slice([start], [end]) - Він повертає новий масив, копіюючи до нього всі елементи від індексу start до end (не включаючи end). 
// Також можна slice викорстати без аркгументів щоб скопіваюти масив  . 

let characters = ["A", "B", "C", "D", "E", "F", "G"];
let arr6 = characters.slice(1, 4);
console.log(arr6); // B , C, D
console.log(characters); // A, B, C, D, E, F, G

let characters2 = ["A", "B", "C", "D", "E", "F", "G"];
let arr7 = characters2.slice();
console.log(arr7);

// concat - Метод arr.concat створює новий масив, в який копіює дані з інших масивів та додаткові значення.  Синтаксис: arr.concat(arg1, arg2...)

let characters3 = ["A", "B", "C"];
let numbers = [1, 2, 3];
let values = characters3.concat(numbers);
console.log(values); // A, B, C, 1, 2, 3

let values2 = characters3.concat(4, 5, 6);
console.log(values2); // // A, B, C, 1, 2, 3

// concat метод  копіює також і об'єкти в масив
let characters4 = ["A", "B", "C"];
let user = {
    name: `Igor`,
    lastname: `Matsiuk`
};
console.log(characters4.concat(user));


