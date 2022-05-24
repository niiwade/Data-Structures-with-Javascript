
// Write a constructor function that takes a parameter of user properties  

function User (firstName, lastName, age, gender) {

  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.gender = gender
}

const user2 = new User ("wade", "lamptey", 39, "Male")

console.log (user2)

//add email domain to prototype object

User.prototype.emailDomain = '@gmail.com'


User.prototype.getEmailAddress = function (){

  return this.firstName + this.lastName + this.emailDomain
}

console.log(User.getEmailAddress)
