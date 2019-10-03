// Creating a cookie in JS
document.cookie = "iAmACookie=Hello"
// This is useful to store some data, but a cookie naturally expires upon exiting the current document

// Creating a cookie with an expiration
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
console.log(tomorrow)
// => Fri Oct 04 2019 10:07:16 GMT-0400 (Eastern Daylight Time)

document.cookie = `thisCookieExpiresTomorrow=w0w; expires=${tomorrow}`

// Read all cookies
console.log(document.cookie)
// => iAmACookie=Hello; thisCookieExpiresTomorrow=w0w

// Changing a cookie
document.cookie = "iAmACookie=Wow"
console.log(document.cookie)
// => thisCookieExpiresTomorrow=w0w; iAmACookie=Wow

// Deleting a cookie
// In order to delete a cookie, we can just set the cookie expiration to a date that has already passed
const yesterday = new Date()
yesterday.setDate(yesterday.getDate() - 1)
console.log(yesterday)
// => Wed Oct 02 2019 10:07:16 GMT-0400 (Eastern Daylight Time)

document.cookie = `iAmACookie=; expires=${yesterday}`
console.log(document.cookie) // If this doesn't print  iAmACookie, it worked!
// => thisCookieExpiresTomorrow=w0w

// You'll notice that cookies are seperated by semicolons when stored. Thus we can return individual cookies by splitting them by the semicolons
document.cookie = `newCookie=nomNOMn0m; expires=${tomorrow}`
let cookieArray = document.cookie.split("; ")
console.log(cookieArray[0])
// => thisCookieExpiresTomorrow=w0w
console.log(cookieArray[1])
// => newCookie=nomNOMn0m

// We can use some creativity to store more complex data in a cookie
const imAnObject = {name: "Sukrit", location: "New York", hobby: "JavaScript"}
console.log(imAnObject) // Objects can be pretty useful
// => {name: "Sukrit", location: "New York", hobby: "JavaScript"}
console.log(imAnObject.name) // But cookies can only store strings
// => Sukrit
console.log(imAnObject.location) // So we have to be a little creative
// => New York
console.log(imAnObject.hobby) // To bypass this limitation
// => JavaScript

const stringy = JSON.stringify(imAnObject) // Convert this object to a string
console.log(stringy)
// => {"name":"Sukrit","location":"New York","hobby":"JavaScript"}
document.cookie = `user=${stringy}; expires=${tomorrow}`
cookieArray = document.cookie.split("; ")
console.log(cookieArray[2]) // Still a string here, not very useful
// => user={"name":"Sukrit","location":"New York","hobby":"JavaScript"}

// We can parse this stringified object back into an object using JSON.parse()
const turnCookieToObject = string => {
    const arrayOfStrings = string.split("=")
    return JSON.parse(arrayOfStrings[1])
}

const objectified = turnCookieToObject(cookieArray[2])
// This returns all of the functionality of the object
console.log(objectified)
// => {name: "Sukrit", location: "New York", hobby: "JavaScript"}
console.log(objectified.name)
// => Sukrit
console.log(objectified.location)
// => New York
console.log(objectified.hobby)
// => JavaScript
