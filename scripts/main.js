let three = function () {    // curly braces, braces, curlies
    let x = 3
    return x   // output, return value
}

// (3 - 4) * 8

let outputOfThree = three()
console.log(outputOfThree)

console.log(three())

let tres = three
console.log(tres)
console.log(tres())

// call a function
// run a function
// execute a function
// invoke a function

let observe = function (value) {
    console.log(value)
}

observe("I have been observed")
observe(3.14)

let passThrough = function (value) {
    console.log(value)
    return value
}

// const PI = 3.14
let message = "THE RIDDLER!"


const player1 = "John Cage"
const player2 = "Toni Willis"

let print = function (electricity, paper, ink, documentData) { // parameters, "input variables"
    // ...
    console.log(message)
    
    let prepareInk = function (ink) {
        let message = "Out of ink. Buy some more."
        console.log(message)
        let tone
        let quantity
    }

    prepareInk()

    let printedPage = null
    return printedPage
}

let flyer = print("120 volts", "A4 white", "black", "<html>...</html>") // arguments

// scope


// function expression
// let greet = function (name) {
//     let message = "Howdy, "
//     return message + name + "!"
// }

console.log(greet("Randy"))

// function statement (including additional feature: hoisting)
function greet (name = "friend") {
    // let name = prompt("What is your name?", "friend")
    return "Howdy, " + name + "!"
}

console.assert(greet("Bob") === "Howdy, Bob!")
console.assert(greet("Ajay") === "Howdy, Ajay!")
console.assert(greet(undefined) === "Howdy, friend!")
console.assert(greet() === "Howdy, friend!")
console.assert(greet(null) === "Howdy, null!")
