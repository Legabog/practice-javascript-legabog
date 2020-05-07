// 1 Переменные
// camelCase
// const firstName = "Oleg"
// // const lastName = "Dosov" // string
// // const age = 26 // number
// const isProgrammer = true // boolean

// const _private = "private"
// const $ = "some value"

// // const if = 'qwe' // reserved word error
// const withNum5 = "5"
// const 5QWE = 5 // error

// 2 Мутирование
// console.log("Имя человека: " + firstName + ", а возраст человека: " + age)
// alert("Имя человека: " + firstName + ", а возраст человека: " + age)

// const lastName =  prompt("Введите фамилию")
// alert(firstName + " " +lastName)

// 3 Операторы
// let currentYear = 2020
// const birthYear = 1996

// // const age = currentYear + birthYear

// const a = 10
// const b = 5

// let c = 32
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(c)

// 4 Типы данных
// const isProgrammer = true
// const name = "Oleg"
// const age = 26
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)

// 5 Приоритет операторов
// const fullAge = 23
// const birthYear = 1996
// const currentYear = 2020

// > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge
// console.log (isFullAge)

// 6 Условные операторы
// const courseStatus = "ready"

// if (courseStatus === "fail") {
//     console.log("Курс уже готов и его можно проходить")
// } else if (courseStatus === "pending") {
//     console.log("Курс пока находится в процессе разработки")
// } else {
//     console.log("Курс не получился")
// }

// const isReady = false

// if (isReady === true) {
//     console.log("Всё готово!")
// } else {
//     console.log("Всё не готово!")
// }

// isReady ? console.log("Всё готово!") : console.log("Всё не готово!")

// const num1 = 42 // number
// const num2 = "42" // string

// console.log(num1 === num2)

// 7 Булевая логика
// & ||

// 8 Функции

// function calculateAge(year) {
//   return 2020 - year;
// }

// console.log(calculateAge(1996))
// console.log(calculateAge(2019))

// function logInfoAbout(name, year) {
//   const age = calculateAge(year);

//   if (age > 0) {
//     console.log("Человек по имени " + name + " сейчас имеет возраст " + age);
//   } else {
//       console.log("Вообще-то это уже будущее")
//   }
// }

// logInfoAbout("Oleg", 1996);
// logInfoAbout("Danil", 1995);
// logInfoAbout("Danil", 2021);

// 9 Массивы

// const cars = ["Мазда", "Мерседес", "Форд"]

// const cars = new Array("Мазда", "Мерседес", "Форд")

// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = "Порше"
// cars[cars.length] = "Мазда"
// console.log(cars)

// 10 Циклы
// const cars = ["Мазда", "Мерседес", "Форд", "Ауди"]

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }

// 11 Объекты
// const person = {
//     firstName: "Oleg",
//     lastName: "Dosov",
//     year: 1996,
//     languages: ["Ru", "En"],
//     hasWife: false,
//     greet: function() {
//         console.log("greet")
//     }
// }

// console.log(person.firstName)
// console.log(person["lastName"])
// const key = "year"
// console.log(person[key])
// person.hasWife = true
// person.isProgrammer = true
// console.log(person)
// person.greet()

