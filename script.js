// Assignment Code
// red button
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!","@","#","$","%","^","&","*"];
var upperCase = ["A","B","C","D","E","F","G","H"];
var lowerCase = ["a","b","c","d","e","f","g","h"];
var numbers = [1,2,3,4,5,6,7,8];

console.log(specialCharacters)
console.log(upperCase)
console.log(lowerCase)
console.log(numbers)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// generate password function
//in the function include
function generatePassword(){
  console.log("button works")
}

// ability to choose which criteria will be generated in the password
// (use an array)length should be more then 8 and less then 128 characters  
//