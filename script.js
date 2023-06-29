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

  var lower = confirm("Would you like to include lowercase characters?");
  var upper = confirm("Would you like to include uppercase characters?");
  var numeric = confirm("Would you like to include numeric characters?");
  var special = confirm("Would you like to include special characters?");

  if (!lower && !upper && !numeric && !special) {
    alert("You must select at least one character type. Please try again.");
    return;
  }

  var characterSet = '';

  if (lower) {
    characterSet += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (upper) {
    characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (numeric) {
    characterSet += '0123456789';
  }

  if (special) {
    characterSet += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  }

  var password = '';

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet.charAt(randomIndex);
  }
  return password;
}
