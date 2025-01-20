// Задание 1
const str = 'js';
console.log(str.toUpperCase());


// Задание 2
function filterByStartString(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
}

console.log(filterByStartString(['JavaScript', 'java', 'Python'], 'jav'));


// Задание 3
const num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));


// Задание 4
const numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));


// Задание 5
function getRandomNumber() {
    console.log(Math.floor(Math.random() * 10) + 1);
}

getRandomNumber();


// Задание 6
function getRandomArray(n) {
    const length = Math.floor(n / 2);
    return Array.from({length}, () => Math.floor(Math.random() * n));
}

console.log(getRandomArray(10));


// Задание 7
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInRange(5, 15));


// Задание 8
console.log(new Date());


// Задание 9
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


// Задание 10
function formatDate(date) {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}. Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));