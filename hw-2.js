// Задание 1
let a = 10;
alert(a);

a = 20;
alert(a);

// Задание 2
let firstIphoneYear = 2007; // Как и мой год рождения
alert(firstIphoneYear);

// Задание 3
let jsCreator = "Brendan Eich";
alert(jsCreator);

// Задание 4
let num1 = 10;
let num2 = 2;

alert("Сумма: " + (num1 + num2));
alert("Разность: " + (num1 - num2));
alert("Произведение: " + (num1 * num2));
alert("Частное: " + (num1 / num2));

// Задание 5
let result = 2 ** 5;
alert(result);

let a2 = 9; // Задал a2, а не "а", потому что пишу в одном файле и происходит дубликация кода с первым заданием
let b = 2;

// Задание 6
let remainder = a2 % b;
alert(remainder);

// Задание 7

// let num = 1;
// num = num + 5;
// num = num - 3;
// num = num * 7;
// num = num / 3;
// num = num + 1;
// num = num - 1;
// alert(num);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8
let age = prompt("Сколько Вам лет?");
alert(`Сейчас Вам ${age} лет`);

// Задание 9
let user = {
    name: "Tema",
    age: 17,
    isAdmin: true
};

// Задание 10
let userName = prompt("Как Вас зовут?");
alert(`Привет, ${userName}!`);


// Дополнительное задание
let number = prompt("Загадайте любое число");
let doubled = number * 2;
alert(doubled);

let a3 = doubled + 10;
alert(a3);

let b3 = a3 / 2;
alert(b3);

let result2 = b3 - number;
alert(result2);

alert("Ответ равен 5");


