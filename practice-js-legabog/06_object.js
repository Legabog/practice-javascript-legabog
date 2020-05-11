const person = {
  name: "Oleg",
  age: 23,
  isProgrammer: true,
  languages: ["ru", "en"],
  complex_key: "Complex Value",
  ["key_" + (1 + 3)]: "Computed key", // key_4
  greet() {
    console.log("greet");
  },
  info() {
      console.info("Информация про человека по имени:", this.name)
  }
};

// console.log(person.name)
// const ageKey = "age"
// console.log(person["complex_key"])
// console.log(person[ageKey])
// person.greet()

// person.age++
// person.languages.push("by")
// console.log(person)

// delete person["key_4"]
// console.log(person)

// const {name, age: personAge = 10, languages} = person
// console.log(name, personAge, languages)

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log("key: ", key);
//     console.log("value: ", person[key]);
//   }
// }

// const keys = Object.keys(person)
// keys.forEach(key => {
//     console.log("key: ", key);
//     console.log("value: ", person[key]);
// })

// Context
// person.info()

const logger = {
    keys() {
        console.log("Object keys: ", Object.keys(this))
    },
    keysAndValues() {
        // Object.keys(this).forEach(key => {
        //     console.log(`${key} : ${this[key]}`)
        // })
        // const self = this
        // Object.keys(this).forEach(function(key) {
        //     console.log(`${key} : ${this[key]}`)
        // }.bind(this))
    },

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log("---------Start--------")
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`${key} : ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log("-------------------")
            }
        })
        if (bottom) {
            console.log("----------End----------")
        }
    }
}

// const bound = logger.keys.bind(person)
// bound()

// logger.keys.call(person)

// logger.keysAndValues.call({a : 1, b: 2})

logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])