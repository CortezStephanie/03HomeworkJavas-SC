// Assignment Code
// red button
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!","@","#","$","%","^","&","*"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [1,2,3,4,5,6,7,8,9,10];
let passCharacter = '';
let userPass = '';

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
  console.log("button works");
  var passwordLength = window.prompt("You can choose between 8-128 characters")
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("password must be between 8-128 characters");
    return; 
  } 
  let passUpper= window.confirm('Would you like uppercase characters');
  let passLow = window.confirm('Would you like lowercase characters');
  let passNum = window.confirm('Would you like numeric characters');
  let passSpec = window.confirm('Would you like special characters');

  let charcPool = [];

  if (passUpper) {
    charcPool = charcPool.concat(upperCase)
  } 
  if (passLow) {
    charcPool = charcPool.concat(lowerCase)
  }
  if (passNum) {
    charcPool = charcPool.concat(numbers)
  }
  if (passSpec) {
    charcPool = charcPool.concat(specialCharacters)
  }
  
  for (let i = 0; i < passwordLength; i++) {
    let ranIndex = Math.floor(Math.random()* charcPool.length)
    passCharacter = charcPool[ranIndex]
    userPass = userPass.concat(passCharacter)
  }

  return userPass;
}





