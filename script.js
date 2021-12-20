// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  //Prompt Length of Password
  
  
  var lowerChar =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var specChar =["!","@","#","$","%","^","&","*","(",")"];
  var numChar = ["0","1","2","3","4","5","6","7","8","9"];
  var wordResult ="";
  var wordUpper ="";
  var specialCharacter ="";
  var numberCharacters="";
  var toUpper = function (x) {
    return x.toUpperCase()
  };
  upperChar = lowerChar.map(toUpper);


  //Validate, define length and parameters of password
  var lengthOfPasswordString = prompt("Please choose the number of characters in your password between 8 and 128");
  var lengthOfPassword = parseInt(lengthOfPasswordString);
  if(!lengthOfPasswordString){
    while(!lengthOfPasswordString){
      lengthOfPasswordString = prompt("!Please enter a valid value")
    };
  }
  else if (lengthOfPasswordString< 8 || lengthOfPasswordString > 128){
    while(lengthOfPasswordString<8||lengthOfPasswordString>128){
    lengthOfPasswordString = prompt("Incorrect characters choosen, you entered '"+lengthOfPasswordString+ "'\nPlease choose between 8 and 128 characters")};
  };

  var isLowerCase = window.confirm("Would you like to add small letters in your password?");
  var isUpperCase = window.confirm("Would you like to add capital letters in your password??");
  var isSpecialCharacter = window.confirm("Would you like to add special characters in your password?");
  var isNumbers = window.confirm("Would you like to include numbers in your password?");
  if(!isSpecialCharacter && !isSpecialCharacter && !isLowerCase && !isUpperCase){
    while(!isSpecialCharacter && !isNumbers && !isLowerCase && !isUpperCase){
    alert("You need to select atleast one of the criteria \n 1. Lowercase \n 2. Uppercase \n 3. Numbers \n 4. Special Characters")
    isLowerCase = window.confirm("Would you like to add Lower Case Characters?")
    isUpperCase = window.confirm("Would you like to add Upper Case Characters?")
    isNumbers = window.confirm("Would you like to add Numbers?")
    isSpecialCharacter = window.confirm("Would you like to add special characters?")};
  };
    //Determine the length of passoword
    if(isNumbers && isSpecialCharacter && isUpperCase){
      lengthOfPassword = lengthOfPassword-3
    }else  if(isNumbers && isSpecialCharacter && isLowerCase && isUpperCase){
      lengthOfPassword = lengthOfPassword-2
    }else if(isSpecialCharacter && isUpperCase){
      lengthOfPassword = lengthOfPassword-2
    }else  if(isNumbers && isUpperCase){
      lengthOfPassword = lengthOfPassword-2
    }else if(isNumbers || isSpecialCharacter || isUpperCase){
      lengthOfPassword = lengthOfPassword-1
    }
    console.log(lengthOfPassword)
  //Lowercase or Uppercase Logic
  if(isLowerCase){
    for (i=0;i <lengthOfPassword ; i++){
      var randChar = Math.floor(Math.random() * lowerChar.length);
      wordResult = wordResult + lowerChar[randChar]}
    }else if(isUpperCase){
      for (i=0;i <lengthOfPassword ; i++){
        var randChar = Math.floor(Math.random() * upperChar.length);
        wordResult = wordResult + upperChar[randChar]}
    };
  if(isUpperCase){
    var randUpperChar = Math.floor(Math.random() * upperChar.length);
    wordUpper = wordUpper + upperChar[randUpperChar] //text characters
  };
  
  //Special Character Logic
  if(isSpecialCharacter && !isNumbers && !isUpperCase && !isLowerCase){
    for (i=0;i <lengthOfPasswordString ; i++){
      var randSpecChar = Math.floor(Math.random() * specChar.length);
      specialCharacter = specialCharacter + specChar[randSpecChar]};
    }else if(isSpecialCharacter){
      for (i=0;i <lengthOfPasswordString ; i++){
      var randSpecChar = Math.floor(Math.random()* specChar.length)
      specialCharacter = specChar[randSpecChar]}}

  //Number Character Logic
  if(!isSpecialCharacter && isNumbers && !isUpperCase && !isLowerCase){
    for (i=0;i <lengthOfPasswordString ; i++){
      var randNumChar = Math.floor(Math.random()* numChar.length)
      numberCharacters = numberCharacters + numChar[randNumChar]}
    }else if(isNumbers){
      for (i=0;i <lengthOfPasswordString ; i++){
      var randNumChar = Math.floor(Math.random()* numChar.length)
      numberCharacters = numChar[randNumChar]}}
  

  var result = wordUpper+wordResult+specialCharacter+numberCharacters;
  console.log(result)
  return result;
}

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
