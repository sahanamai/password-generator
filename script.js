
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() { 

  //Character option variables
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numberChoice = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var specialCharacter = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "?", "<", ">", "/"]
  
  // Empty Array for future generated password use
  
    var newUpperCase = [];
    var newLowerCase = [];
    var newNumberChoice = [];
    var newSpecialCharacter = [];
    var passwordResult = [];
    var newPassResult = [];
  
  
  //Password length
  var passwordLength = prompt("How many characters would you like your password to be? This must be a length between 8 and 128.");
  //Confirm the password length is within the set parameters 
  if(passwordLength < 8 || passwordLength > 128) {
      alert("Password must be between 8 and 128 characters.")//this will show if password length is not between 8 and 128(tell user to select a number between this length)
      return generatePassword();//if the length is not between 8 and 128, this will return to generatePassword function()
  }
  //Password character selectors, the next steps of the prompts
  else {
    var passwordUppercase = confirm ("Do you want to use capital letters in your password? Click 'OK' for yes and 'cancel' for no.");//selecting uppercase for choosing password
    var passwordLowercase = confirm ("Do you want lowercase letters in your password? Click 'OK' for yes and 'cancel' for no.");//selecting lowercase 
    var passwordNumber = confirm ("Do you want numbers included in your password? Click 'OK' for yes and 'cancel' for no.");//selecting numbers
    var passwordSpecialCharacter = confirm ("Do you want to use special characters in your password? Click OK for yes and cancel for no.");//selecting special character
  }
  
  // console loggin to check results of confirmation 
  console.log(passwordUppercase, passwordLowercase, passwordNumber, passwordSpecialCharacter);
  
  //if capital letters were chosen 
  if (passwordUppercase === true) { 
    for (i=0; i < passwordLength; i++){//making the selection the correct length
      var randomCap = Math.floor(Math.random() * upperCase.length); //this will randomize the characters
      newUpperCase.push(upperCase[randomCap]); //inserting the random character(capital letter) into the empty array(using array concept push)
      passwordResult.push(newUpperCase); //inserting the random character into the final password result
    }
  }
  
    // if lowercase letters were chosen
    if (passwordLowercase === true) {
      for (i=0; i < passwordLength; i++){
        var randomLower = Math.floor(Math.random() * lowerCase.length);
        newLowerCase.push(lowerCase[randomLower]);
        passwordResult.push(newLowerCase);
      }
    }
    //if numbers were chosen 
    if(passwordNumber === true) {
      for (i=0; i < passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * numberChoice.length);
        newNumberChoice.push(numberChoice[randomNumber]);
        passwordResult.push(newNumberChoice);
      }
    }
    //if special characters were chosen
    if(passwordSpecialCharacter === true) {
      for (i=0; i < passwordLength; i++){
        var randomCharacter = Math.floor(Math.random() * specialCharacter.length);//randomize special character length
        newSpecialCharacter.push(specialCharacter[randomCharacter]);//inserting the special character into empty array (newSpecialCharacter[])(using array concept push)
        passwordResult.push(newSpecialCharacter);//inserting newSpecialCharacter[] into passwordResult[]
      }
    }
    //random password generation after all cases are selected
    for(i = 0; i < passwordLength; i++)//this will make the password the correct length(8 and 128)i,e input length from user
     {var randomPassword = Math.floor(Math.random() * passwordResult.length); //randomizing length
      var randomIndex = Math.floor(Math.random() * passwordLength);
     newPassResult.push(passwordResult[randomPassword][randomIndex]); //creating the password with results from the chosen characters
    }
    return newPassResult.join(""); //returns new password array as a string in the box(join donot change original array)
    }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
