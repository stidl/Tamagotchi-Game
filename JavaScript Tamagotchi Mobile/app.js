window.onload = function() {

  //Game State!
var gameState = 1;

// Pet Number
var petNumber = 1; 

//Pet Name stored
var inputVal;

//get input value aka pet name from text field
function getInputValue(){
  var inputVal = document.getElementById("petName").value;
  document.getElementById("petNameOutput").innerHTML = "Pet Name: " + inputVal;
  //alert(inputVal);
}

//hide and show elements for start Screen
if (gameState == 1){
//document.getElementById("gameOver").style.visibility = "hidden";
//document.getElementById("needBars").style.visibility = "hidden";
//document.getElementById("Buttons").style.visibility = "hidden";
document.getElementById("mainScreen").style.visibility = "hidden";
document.getElementById("gameOver").style.visibility = "hidden";
document.getElementById("evolve").style.visibility = "hidden";
document.getElementById("pet").style.visibility = "visible";
//document.getElementById("pet1Happy").src = "pet1happy.gif";
document.getElementById("arrowLeft").onclick = changePetPrevious;
document.getElementById("arrowRight").onclick = changePetNext;
document.getElementById("confirmBtn").onclick = confirmPetChoice;
}

function confirmPetChoice(){
if (gameState == 1)
gameState = 2;
document.getElementById("startScreen").style.display = "none";
document.getElementById("mainScreen").style.visibility = "visible";
getInputValue();
}

function changePetPrevious(){
if (petNumber == 1){
    //alert("Left Button Pressed!");
  petNumber = 2;
  document.getElementById("pet1Happy").src = "PetHappy2.gif";
} else if(petNumber == 2){
  document.getElementById("pet1Happy").src = "pet1happy.gif";
  petNumber =1;
}
}

function changePetNext(){
  if (petNumber == 1){
    //alert("Right Button Pressed!");
  petNumber = 2;
  document.getElementById("pet1Happy").src = "PetHappy2.gif";
} else if(petNumber == 2){
  document.getElementById("pet1Happy").src = "pet1happy.gif";
  petNumber =1;
}
}

var hunger = 100;
var clock1 = setInterval(depleteHunger, 350); //Hunger decrement Speed
var fun = 100;
var clock2 = setInterval(depleteFun, 350);
var hygiene = 100;
var clock3 = setInterval(depleteHygiene, 350);
var energy = 100;
var clock4 = setInterval(depleteEnergy, 350);

var btnClicked = 0;


//make buttons work
document.getElementById("BtnHunger").onclick = fillHunger;
document.getElementById("BtnFun").onclick = fillFun;
document.getElementById("BtnHygiene").onclick = fillHygiene;
document.getElementById("BtnEnergy").onclick = fillEnergy;


//load Game!
document.getElementById("BtnLoad").onclick = loadGame;
function loadGame(){
  //console.log("save button is clicked");
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("mainScreen").style.visibility = "visible";
  gameState = 2;
  hunger = window.localStorage.getItem("Hunger", hunger);
  fun = window.localStorage.getItem("Fun", fun);
  hygiene = window.localStorage.getItem("Hygiene", hygiene);
  energy = window.localStorage.getItem("Energy", energy);
  btnClicked = window.localStorage.getItem("Evolve", btnClicked);
  petNumber = window.localStorage.getItem("PetType", petNumber);
  document.getElementById("petNameOutput").innerHTML = "Pet Name: " + window.localStorage.getItem("PetName", inputVal);
  if(btnClicked >= 11){
    document.getElementById("evolve").style.visibility = "visible";
  }
}

//save Game!!
document.getElementById("BtnSafe").onclick = saveGame;

function saveGame(){
  //console.log("button is clicked" + hunger);
  window.localStorage.setItem("Hunger", hunger);
  window.localStorage.setItem("Fun", fun);
  window.localStorage.setItem("Hygiene", hygiene);
  window.localStorage.setItem("Energy", energy);
  window.localStorage.setItem("Evolve", btnClicked);
  window.localStorage.setItem("PetType", petNumber);
  window.localStorage.setItem("PetName", document.getElementById("petName").value);
  //alert();
}

//setInterval gets called every second for Main Screen///////////
setInterval(function(){ 
  spriteHandler();
  bubbleHandler();
  gameOver();
  //console.log("Your game state is: " + gameState)
}, 1000);


//handels the sprites and bubbles
function bubbleHandler(){
if(hunger <= 50){
  document.getElementById("food-image1").style.opacity ="1";
} else {
  document.getElementById("food-image1").style.opacity ="0";
}

if(fun <= 45){
  document.getElementById("play-image1").style.opacity ="1";
} else {
  document.getElementById("play-image1").style.opacity ="0";
}

if(hygiene <= 40){
  document.getElementById("bath-image1").style.opacity ="1";
} else {
  document.getElementById("bath-image1").style.opacity ="0";
}

if(energy <= 35){
    document.getElementById("sleep-image1").style.opacity ="1";
  } else {
    document.getElementById("sleep-image1").style.opacity ="0";
  }
}

//handles the need bubbles
function spriteHandler(){
  if(hunger <= 50 || fun <= 45 || hygiene <= 40 || energy <= 35){
    document.getElementById("pet1Happy").src = "Pet1Sad.gif";
} else {
  document.getElementById("pet1Happy").src = "pet1happy.gif";
}
}

//make needs go down
function depleteHunger(){
  if(hunger == 0){
    clearInterval(clock1);
    //alert("Your pet is starving!");
    //gameovercheck();
  } else{
    hunger--;
    document.getElementById("HungerBar").value = hunger;
  }
}

function depleteFun(){
  if(fun == 0){
    clearInterval(clock1);
    //alert("Your pet is bored to death!");
    //gameovercheck();
  } else{
    fun--;
    document.getElementById("FunBar").value = fun;
  }
}

function depleteHygiene(){
  if(hygiene == 0){
    clearInterval(clock1);
    //alert("Your pet is filthy!");
    //gameovercheck();
  } else{
    hygiene--;
    document.getElementById("HygieneBar").value = hygiene;
  }
}

function depleteEnergy(){
  if(energy == 0){
    clearInterval(clock1);
    //alert("Your pet is passing out!");
    //gameovercheck();
  } else{
    energy--;
    document.getElementById("EnergyBar").value = energy;
  }
}

//Fill the needs with button clicks
function fillHunger(){
  if(hunger <= 100 && hunger != 0){
    hunger += 5;
    hygiene -= 1;
  } else if (hunger == 0){
    hunger += 0;
  }
}

function fillFun(){
  if(fun <= 100 && fun != 0){
    fun += 5;
    energy -= 1;
  } else if (fun == 0){
    fun += 0;
  }
}

function fillHygiene(){
  if(hygiene <= 100 && hygiene != 0){
    hygiene += 5;
    fun -= 1;
  } else if (hygiene == 0){
    hygiene += 0;
  }
}

function fillEnergy(){
  if(energy <= 100 && energy != 0){
    energy += 5;
    hunger -=1;
  } else if (energy == 0){
    energy += 0;
  }
}


}