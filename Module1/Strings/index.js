// let username = "per"

// // Create a variable, message, that stores the string: "You have tree new notifications"

// let message = "You have tree new notifications"

// let messageToUser = message + ", " + username + "!"

// console.log(messageToUser)

// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints

// console.log(totalPoints)

// console.log(4 + 5) //9
// console.log("2" + "4")//24
// console.log("5" + 1)//51
// console.log(100 + "100")//100100

let welcomeEl = document.getElementById("welcome-el")

let name = "Per Harald Borgen"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText += "👋"

