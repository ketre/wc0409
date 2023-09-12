//an event listener to the input field to imitate button click by pressing Enter key
var input = document.getElementById("sum");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.getElementById("resultButton").click();
  }
});

//an array to store different mathematical operators
let operatorArray = ["-", "+", "*"];

// a function to get a random element from the array
function getRandomOperator() {
  const randomIndex = Math.floor(Math.random() * operatorArray.length);
  return operatorArray[randomIndex];
}

//a function to get random integers. Math.Floor rounds them down to a whole number
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//declaring random numbers and operators by calling a function on each
let randomFirstNum = getRndInteger(0, 10);
let randomSecondNum = getRndInteger(0, 10);
let randomOperator = getRandomOperator();

//seeding the above values back to the HTML elements
document.getElementById("firstNum").textContent = randomFirstNum;
document.getElementById("secondNum").textContent = randomSecondNum;
document.getElementById("operator").textContent = randomOperator;

// setting up a 10s countdown. Using if/else to writw relevant text inside the html element
var timeleft = 10;

var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML =
      "Time's up, maybe next time.";
  } else if (timeleft > 1) {
    document.getElementById("countdown").innerHTML =
      timeleft + " seconds remaining";
  } else if ((timeleft = 1)) {
    document.getElementById("countdown").innerHTML =
      timeleft + " second remaining";
  }
  timeleft -= 1;
}, 1000); //1000 is a multiplier so that the countdown = -1s

let x = false
//a function to compare the correct answer (realSum) to the user's input (userSum)
function check() {
  let realSum = eval(randomFirstNum + randomOperator + randomSecondNum);
  let userSum = parseInt(document.getElementById("sum").value);
  //making sure that the correct answer is given within the 10s timer
  if (timeleft > 0 && realSum === userSum) {
    alert("Good job!");
    x = true;
    console.log(x);
    farewell();
  } else if (timeleft > 0 && realSum != userSum) {
    alert("Incorrect. Try again!");
    x = false;
  }
}

// THE BELOW CODE DOESN'T WORK AS I INTENDED, SO COMMENTING IT OUT
//if the answer is correct, all text inside the box changes
function farewell() {
  if (x=true){
    const box = document.getElementById("box");
    const items = document.getElementsByClassName("heading");
    for (const item of items) {
      box.textContent = 'You did great! Now reload the page to solve another puzzle.'
    }
  }
}