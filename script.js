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

  var length = Number(window.prompt("Choose your password lenght? (min 8, max 128)", ""));

  if (length < 8 || length > 128) {
    alert("Invalid password length. Password lenght must be between 8 to 128 characters. Please try again.");
    return;
  }

  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var password = "";

  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
}

