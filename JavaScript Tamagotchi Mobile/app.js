window.onload = function() {

  //Game State!
var gameState = 1;

// Pet Number
var petNumber = 1; 

var hunger = 100;
var clock1 = setInterval(depleteHunger, 350); //Hunger decrement Speed
var fun = 100;
var clock2 = setInterval(depleteFun, 350);
var hygiene = 100;
var clock3 = setInterval(depleteHygiene, 350);
var energy = 100;
var clock4 = setInterval(depleteEnergy, 350);

//make buttons work
document.getElementById("BtnHunger").onclick = fillHunger;
document.getElementById("BtnFun").onclick = fillFun;
document.getElementById("BtnHygiene").onclick = fillHygiene;
document.getElementById("BtnEnergy").onclick = fillEnergy;

				
//setInterval gets called every second///////////
setInterval(function(){ 
  spriteHandler();
  bubbleHandler();
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