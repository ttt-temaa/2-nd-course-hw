// Задача 1
let password = 'пароль';
let yourpassword = prompt('Введите пароль');
if (password === yourpassword) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно')
}


// Задача 2
let c = 2;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
// Для c = 0: 'Неверно'. Для c = 10: 'Неверно'. Для c = -3: 'Неверно'. Для c = 2: 'Верно'.


// Задача 3 (сделаем так, чтобы пользователь вводил для этого данные сам)
let d = prompt("Введите значение для переменной d:");
let e = prompt("Введите значение для переменной e:");

d = Number(d);
e = Number(e);

if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}


// Задача 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b)); // Задаем преобразование типа в num


// Задача 5
let monthNumber = Number(prompt("Введите номер месяца года и программа выведет время года," +
    " которое соответствует этому номеру:"));

if (monthNumber > 12 || monthNumber < 1) {
    console.log("Ошибка: номер месяца должен быть от 1 до 12.");
} else {
    switch (monthNumber) { // Сокращаем код и пишем все номера месяца в одну итерацию цикла
        case 12:
        case 1:
        case 2:
            console.log("Зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Осень");
            break;
        default:
            console.log("Ошибка: некорректный номер месяца.");
    }
}