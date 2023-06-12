// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
// var password = generatePassword();
var passwordLength = prompt("How long do you want the password to be? At least 8 characters and no more than 128 characters");
  //alert(typeof passwordlength);
  passwordLength = parseInt(passwordLength)
// to do : validate user password length, if not a number then alert to fit criteria and have them answer again

  var password = "";
// for(var i=0; i<passwordLength; i++) {
//     password = password+"a"; // "a"+"a" is equals "aa"
//   }
var passwordLC = confirm("Do you want lowercase characters?");
var passwordUC = confirm("Do you want uppercase characters?");
var passwordNC = confirm("Do you want number characters?");
var passwordSC = confirm("Do you want special characters?"); // ["%", "!", "@", ..]
//alert(passwordLC)

/**
 * 
 * getRandomItem
 * Gives you something random from inside the array
 * Eg. [1,2,3,4] => 2
 * 
 */
function getRandomItem(anArray) {
// 0 to .99 multiplied by length will give you some decimal number between 0 
// but never reaches the length, therefore gives you array index after you round down
// into an integer
  var length = anArray.length;
  var index = Math.floor(Math.random()*length)
  return anArray[index];
}
var possibleLowers = ['a','b','c','d'] // TODO: Spell out arrays or do an alternate method
var possibleUppers
var possibleNumbers
var possibleSpecials

// Get first 4 characters first
if(passwordLC) {
  // password = password + getRandomItem(possibleLowers)
}

// Google: Array concat javascript
var possibleCharacters = [];
if(passwordLC) possibleCharacters.concat(possibleLowers)
if(passwordUC) possibleCharacters.concat(possibleUpers)
if(passwordNC) possibleCharacters.concat(possibleNumbers)
if(passwordSC) possibleCharacters.concat(possibleSpecials)
// Then use for loop to create rest of the password
//TODO: for...getRandomItem(possibleCharacters) to draw in new password characters. 

// Google how to shuffle an array. 
password = password.split("").sort(function() { return Math.random() - 0.5}).join("");

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
