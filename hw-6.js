// Задание 1
const arr1 = [1, 5, 4, 10, 0, 3];
for (let num of arr1) {
    console.log(num);
    if (num === 10) break;
}


// Задание 2
const arr2 = [1, 5, 4, 10, 0, 3];
console.log(arr2.indexOf(4));


// Задание 3
const arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(' '));


// Задание 4
const arr4 = Array(3).fill().map(() => Array(3).fill(1));
console.log(arr4);


// Задание 5
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);


// Задание 6
let arr6 = [9, 8, 7, 'a', 6, 5];
arr6 = arr6.filter(item => typeof item === 'number').sort((a, b) => a - b);
console.log(arr6);


// Задание 7
const arr7 = [9, 8, 7, 6, 5];
const x = parseInt(prompt('Угадайте число'), 10);
alert(arr7.includes(x) ? 'Угадал' : 'Не угадал');


// Задание 8
const str = 'abcdef';
console.log(str.split('').reverse().join(''));


// Задание 9
const arr9 = [[1, 2, 3], [4, 5, 6]];
const flatArr = [...arr9[0], ...arr9[1]];
console.log(flatArr);


// Задание 10
const arr10 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr10.length - 1; i++) {
    console.log(arr10[i] + arr10[i + 1]);
}


// Задание 11
function squareArray(arr) {
    return arr.map(num => num ** 2);
}

console.log(squareArray([1, 2, 3, 4]));


// Задание 12
function wordLengths(arr) {
    return arr.map(word => word.length);
}

console.log(wordLengths(['apple', 'banana', 'cherry']));


// Задание 13
function negativeNumbers(arr) {
    return arr.filter(num => num < 0);
}

console.log(negativeNumbers([-1, 2, -3, 4, -5]));


// Задание 14
const arr14 = Array.from({length: 10}, () => Math.floor(Math.random() * 11));
const evenNumbers = arr14.filter(num => num % 2 === 0);
console.log(arr14, evenNumbers);


// Задание 15
const arr15 = Array.from({length: 6}, () => Math.floor(Math.random() * 10) + 1);
const average = arr15.reduce((sum, num) => sum + num, 0) / arr15.length;
console.log(arr15, average);
