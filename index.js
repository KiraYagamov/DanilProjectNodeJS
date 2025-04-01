// Решение домашней задачи
// let line1 = "abcde"
// let line2 = "abc"
// let biggerLine = ""
// let difference = 0

// if (line1.length > line2.length) {
//     biggerLine = line1
//     difference = line1.length - line2.length
// }
// else {
//     biggerLine = line2
//     difference = line2.length - line1.length
// }

// for (let i = 0; i < difference; i++){
//     console.log(biggerLine)
// }


// let line = "fdsfdsf"

// if (line.length > 10){
//     line = line.slice(0, 6)
// }
// else {
//     while (line.length < 12) {
//         line += "o"
//     }
// }
// console.log(line)

// let line = "0++FDSFDSF-fsdfsdfg0gfdg0gf0"
// let countPlus = 0
// let countMinus = 0
// let countZero = 0

// for (let i = 0; i < line.length; i++){
//     if (line[i] == "+") {
//         countPlus += 1
//     }
//     else if (line[i] == "-"){
//         countMinus += 1
//     }
//     if (i < line.length-1 && line[i+1] == "0"){
//         countZero += 1
//     }
// }2

// console.log("Плюсов: " + countPlus)
// console.log("Минусов: " + countMinus)
// console.log("Символов перед нулями: " + countZero)


// let line = "dgfdgdf123gfdgdfg123dasdasddsdd"
// let numbers = "1234567890"
// let maxLength = 0
// let currentLength = 0

// for (let i = 0; i < line.length; i++){
//     if (numbers.includes(line[i])) {
//         currentLength += 1
//     }
//     else {
//         if (currentLength > maxLength) {
//             maxLength = currentLength
//         }
//         currentLength = 0
//     }
// }
// if (currentLength > maxLength) {
//     maxLength = currentLength
// }
// console.log(maxLength)


// let line = "dgfdgdf123gfdgdfg456dasdasddsdd"
// let numbers = "1234567890"
// let summa = 0

// for (let i = 0; i < line.length; i++){
//     if (numbers.includes(line[i])){
//         summa += Number(line[i])
//     }
// }

// console.log(summa)


// function sumOfNumbers(line) {
//     let numbers = "1234567890"
//     let summa = 0
//     for (let i = 0; i < line.length; i++){
//         if (numbers.includes(line[i])){
//             summa += Number(line[i])
//         }
//     }
//     return summa
// }

// let summa1 = sumOfNumbers("dgfdgdf123gfdgdfg456dasdasddsdd")
// let summa2 = sumOfNumbers("fdsfhhgjhgjbvncv623ngh8769vcnbvbc")
// let summa3 = sumOfNumbers("cvcxn,b,kdfsd1mvdcb9")
// let summa4 = sumOfNumbers("gkjlkj;vbncvvxcvds2fn876nbvnbhfgh7765")
// let summa5 = sumOfNumbers("bcvbvbcn,nm134")

// console.log(summa1 + summa2)


function toBinary(num) {
    if (num === 0) {
        return "0"
    }
    let result = ""
    while (num > 0){
        result = String(num % 2) + result
        num = Math.floor(num / 2)
    }
    return result
}

function pow(num, s) {
    let result = 1
    for (let i = 0; i < s; i++) {
        result *= num
    }
    return result
}

function sumArray(arr) {

}

function dayOfWeek(number) {
    const weekDays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    if (number > 0 && number < 8) {
        return weekDays[number - 1];
    }
    else {
        return "Неверный день!";
    }
}

const printArray = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

const useFunction = (func) => {
    func([1, 2, 3]);
}

// useFunction(printArray);

function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i);
    }
}

// const array = ["Hello", "World"];

// forEach(array, (el, i) => {
//     console.log(el); 
// });

// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// const count = {};

// fruits.forEach(el => {
//     if (!count[el]) {
//         count[el] = 1;
//     }
//     else {
//         count[el] += 1;
//     }
// });

// console.log(count);


// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

// const getUnique = (array) => {
//     const unique = [];
//     array.forEach(el => {
//         if (!unique.includes(el)) {
//             unique.push(el);
//         }
//     });
//     return unique;
// }

// console.log(getUnique(fruits));

// const array = [
//     { name: 'alex', age: 20 }, 
//     { name: 'mike', age: 24 },
//     { name: 'masha', age: 20 }
// ];

// const index = array.findIndex(el => el.age === 20);
// console.log(index);


// const getSum = (arr) => {
//     let sum = 0;
//     arr.forEach(el => {
//         sum += el;
//     });
//     return sum;
// }

// console.log(getSum([1, 2, 3, 4, 5]));

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getRandomString = (length) => {
    const avaiableSymbols = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    let result = "";
    for (let i = 0; i < length; i++) {
        const index = getRandomInt(0, avaiableSymbols.length);
        result += avaiableSymbols[index];
    }
    return result;
};

const generateEmail = (length=10, domain="bomes.ru") => getRandomString(length) + "@" + domain;

for (let i = 0; i < 20; i++) {
    console.log(generateEmail());
}
