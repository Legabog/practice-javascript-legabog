// 1 Функции
// Function Declaration
// function greet(name) {
//   console.log(`Привет ${name}`);
// }

// // Function Expression
// const greet2 = function greet2(name) {
//   console.log(`Привет 2 ${name}`);
// };

// greet("Bog")
// greet2("Greet2")

// console.log( typeof greet)
// console.dir( greet)

// 2 Анонимные функции
// let counter = 0;
// const interval = setInterval(function () {
//   if (counter === 5) {
//     clearInterval(interval);
//   } else {
//     console.log(++counter);
//   }
// }, 1000);

// 3 Стрелочные функции
// function greet(name) {
//   console.log(`Привет ${name}`);
// }

// const greet = (name) => {
//     console.log(`Привет ${name}`);
// }

// const greet2 = name => console.log(`Привет ${name}`);

// greet2("Lega")

// const pow2 = num => num**2

// console.log(pow2(5))

// 4 Параметры по умолчанию
// const sum = (a = 41, b = 1) => a + b

// console.log(sum())

// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result += num    
//     }
//     return result
// }

// console.log(sumAll(1, 2, 3, 4, 5))

// 5 Замыкания
// function createMember(name) {
//     return function(lastName) {
//         console.log(name + " " + lastName)
//     }
// }

// createMember("Oleg")("Dosov")
