// Assignment Code
// this is the generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// this is the click event which goes to button
generateBtn.addEventListener("click", writePassword);

//This code generate a password
function generatePassword() {
  //choose password length
  lenghtp = Number(window.prompt("Password Lenght? (min 8, max 128)", ""));
  var length = lenghtp;
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var password = "";

  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
}

