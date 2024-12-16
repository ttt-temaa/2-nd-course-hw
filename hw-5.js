// Задание 1
function getMin(a, b) {
    return a < b ? a : b;
}

console.log(getMin(8, 4));
console.log(getMin(6, 6));
console.log(getMin(10, 15));


// Задание 2
function checkEvenOrOdd(n) {
    return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}

console.log(checkEvenOrOdd(2));
console.log(checkEvenOrOdd(1));
console.log(checkEvenOrOdd(0));
console.log(checkEvenOrOdd(-1));


// Задание 3
function printSquare(n) {
    console.log(n * n);
}

printSquare(4);
printSquare(7);


function getSquare(n) {
    return n * n;
}

let result = getSquare(4);
console.log(result);
console.log(getSquare(7));


// Задание 4
function checkAge() {
    let age = prompt("Сколько вам лет?");
    age = Number(age);

    // Проверка на корректность ввода
    if (isNaN(age) || age < 0) {
        console.log("Вы ввели неправильное значение");
    } else if (age >= 0 && age <= 12) {
        console.log("Привет, друг!");
    } else if (age >= 13) {
        console.log("Добро пожаловать!");
    }
}

checkAge();


// Задание 5
function multiplyNumbers(a, b) {
    a = Number(a);
    b = Number(b);

    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}

console.log(multiplyNumbers(5, 5));
console.log(multiplyNumbers('5', 5));
console.log(multiplyNumbers('five', 5));
console.log(multiplyNumbers(5, 'five'));


// Задание 6
function cubeNumber() {
    let n = prompt("Введите число:");

    n = Number(n);

    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    } else {
        let result = n ** 3;
        return `${n} в кубе равняется ${result}`;
    }
}

console.log(cubeNumber());


// Задание 7
let circle1 = {
    radius: 5,

    getArea: function() {
        return Math.PI * Math.pow(this.radius, 2);
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

let circle2 = {
    radius: 10,
    getArea: function() {
        return Math.PI * Math.pow(this.radius, 2);
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

console.log("Circle 1: ");
console.log("Area:", circle1.getArea());
console.log("Perimeter:", circle1.getPerimeter());

console.log("Circle 2: ");
console.log("Area:", circle2.getArea());
console.log("Perimeter:", circle2.getPerimeter());

