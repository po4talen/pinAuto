// Метод forEach() викликає задану функцію для кожного елементу масиву … arr.forEach(function(item, index, array)

let arr = [1, 2, 3, 4, 5]
let sum = 0;

arr.forEach(function(value){
    sum+=value
});
console.log(sum);


arr.forEach(addition);
console.log(sum);


function addition(value) {
    sum += value;
};



