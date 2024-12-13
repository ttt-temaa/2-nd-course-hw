// Задача 1
for (let i = 0; i < 2; i++) {
    console.log("Привет");
}


// Задача 2 (реализация через изученные циклы)
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}

let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);


// Задача 3 (реализация через изученные циклы)
for (let q = 7; q <= 22; q++) {
    console.log(q);
}

let w = 7;
while (w <= 22) {
    console.log(w);
    w++;
}

let r = 7;
do {
    console.log(r);
    r++;
} while (r <= 22);


// Задача 4 (реализация через for-in)
let obj = {
    "Коля": "200",
    "Вася": "300",
    "Петя": "400"
};

for (let name in obj) {
    console.log(`${name} — зарплата сотрудника в этом месяце -  ${obj[name]} долларов`);
}


// Задача 5
let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}

console.log(`Полученное число в ходе итераций: ${n}`);
console.log(`Количество итераций: ${num}`);


// Задача 6
let firstFriday =  1;
const daysInMonth = 31;

// Цикл для вывода всех пятниц месяца
for (let day = firstFriday; day <= daysInMonth; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}
