
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

				
  }
  }

  }

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


