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

let line = "0++FDSFDSF-fsdfsdfg0gfdg0gf0"
let countPlus = 0
let countMinus = 0
let countZero = 0

for (let i = 0; i < line.length; i++){
    if (line[i] == "+") {
        countPlus += 1
    }
    else if (line[i] == "-"){
        countMinus += 1
    }
    if (i < line.length-1 && line[i+1] == "0"){
        countZero += 1
    }
}

console.log("Плюсов: " + countPlus)
console.log("Минусов: " + countMinus)
console.log("Символов перед нулями: " + countZero)
