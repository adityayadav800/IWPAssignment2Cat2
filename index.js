var y = Math.floor(Math.random() * 100 + 1); //Use of Math Object
var guess = 1;
var guessHistory = [] //Use of Array Object
var date = new Date()//Use of Date Object

// ====================================== Functions ======================================
function updateGuessList() {
  document.getElementById("guessList").innerHTML = guessHistory.toString(); // Use of String Object.
}

function GuessCheck() {
  // number guessed by user form Validation is done on this form object to check if it is a number.    
  let x = document.getElementById("guessField").value;
  x = validate(x);
  guessHistory.push(x);
  if (guess < 10) {
    if (x == y) // Use of Boolean Objects
    {
      alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
        + guess + " GUESS ON " + date);
    }
    else if (x > y) {
      guess++;
      alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else {
      guess++;
      alert("OOPS SORRY!! TRY A GREATER NUMBER");
    }
    updateGuessList();
  }
  else {
    alert(" GUESSES ARE OVER AS OF" + date + "PLEASE REFRESH ");//Use of String Object
  }
  return false;
}

function validate(value) {
  if(value > 100) {
    return 100;
  }
  else if(value <= 0) {
    return 1;
  }
  else {
    return value;
  }
}