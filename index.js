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

let value = sumArray([5, 7, 2, 3, 8, 9]) // 34
console.log(value)
