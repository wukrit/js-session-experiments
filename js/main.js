// Creating a cookie in JS
document.cookie = "iAmACookie=Hello"
// This is useful to store some data, but a cookie naturally expires upon exiting the current document

// Creating a cookie with an expiration
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
console.log(tomorrow)

document.cookie = `thisCookieExpiresTomorrow=w0w; expires=${tomorrow}`

// Read all cookies
console.log(document.cookie)

// Changing a cookie
document.cookie = "iAmACookie=Wow"
console.log(document.cookie)

// Deleting a cookie
// In order to delete a cookie, we can just set the cookie expiration to a date that has already passed
const yesterday = new Date()
yesterday.setDate(yesterday.getDate() - 1)

console.log(yesterday)
document.cookie = `iAmACookie=; expires=${yesterday}`
console.log(document.cookie) // If this doesn't print  iAmACookie, it worked!

// You'll notice that cookies are seperated by semicolons when stored. Thus we can return individual cookies by splitting them by the semicolons
document.cookie = `newCookie=nomNOMn0m; expires=${tomorrow}`
let cookieArray = document.cookie.split("; ")
console.log(cookieArray[0])
console.log(cookieArray[1])

// We can use some creativity to store more complex data in a cookie
const imAnObject = {name: "Sukrit", location: "New York", hobby: "JavaScript"}
console.log(imAnObject) // Objects can be pretty useful
console.log(imAnObject.name) // But cookies can only store strings
console.log(imAnObject.location) // So we have to be a little creative
console.log(imAnObject.hobby) // To bypass this limitation

const stringy = JSON.stringify(imAnObject) // Convert this object to a string
console.log(stringy)
document.cookie = `user=${stringy}; expires=${tomorrow}`
cookieArray = document.cookie.split("; ")
console.log(cookieArray[2]) // Still a string here, not very useful

// We can parse this stringified object back into an object using JSON.parse()
const turnCookieToObject = string => {
    const arrayOfStrings = string.split("=")
    return JSON.parse(arrayOfStrings[1])
}

const objectified = turnCookieToObject(cookieArray[2])
// This returns all of the functionality of the object
console.log(objectified)
console.log(objectified.name)
console.log(objectified.location)
console.log(objectified.hobby)
