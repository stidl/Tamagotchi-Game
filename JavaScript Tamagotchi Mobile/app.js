

/*
 * virtual pet
 */

// our expressions. this could be a sortable object
// currently an array that returns worst expression to happiest expression
const expressions = [
    `😍`, `😀`, `😔`, `😭`
  ]
  
  // dom node refs
  const creatureOutput = document.querySelector(".output .pet")
  
  const hungerOutput = document.querySelector(".output .hunger")
  const hungerLabel = hungerOutput.querySelector(".name")
  const hungerValueText = hungerOutput.querySelector(".value")
  const hungerProgressBar = hungerOutput.querySelector("progress")

  const funOutput = document.querySelector(".output .fun")
  const funLabel = funOutput.querySelector(".name")
  const funValueText = funOutput.querySelector(".value")
  const funProgressBar = funOutput.querySelector("progress")
  
  const hygieneOutput = document.querySelector(".output .hygiene");
  const hygieneLabel = hygieneOutput.querySelector(".name");
  const hygieneValueText = hygieneOutput.querySelector(".value");
  const hygieneProgressBar = hygieneOutput.querySelector("progress");

  const energyOutput = document.querySelector(".output .energy");
  const energyLabel = energyOutput.querySelector(".name");
  const energyValueText = energyOutput.querySelector(".value");
  const energyProgressBar = energyOutput.querySelector("progress");
  
  const btnFeed = document.querySelector(".action-feed");
  const btnPlay = document.querySelector(".action-play");
  const btnClean = document.querySelector(".action-clean");
  const btnSleep = document.querySelector(".action-sleep");
  
  // click bindings
  btnFeed.onclick = (e) => feed();
  btnPlay.onclick = (e) => play();
  btnClean.onclick = (e) => clean();
  btnSleep.onclick = (e) => sleep();
  
  // settings
  const renderSpeed = 1000 / 60; // 60fps
  
  const decayRateHunger = .5 * 1000; // in seconds
  const decayRateFun = .5 * 1000; // in seconds
  const decayRateHygiene = .5 * 1000; // in seconds
  const decayRateEnergy = .5 * 1000; // in seconds
  
  // scores
  let scoreHunger = 100;
  const scoreHungerMax = 100;
  let scoreFun = 100;
  const scoreFunMax = 100;
  let scoreHygiene = 100;
  const scoreHygieneMax = 100;
  let scoreEnergy = 100;
  const scoreEnergyMax = 100;
  
  // support for actions
  const actionFeedIncrement = 5;
  const actionPlayIncrement = 5;
  const actionCleanIncrement = 5;
  const actionSleepIncrement = 5;
  
  // actions
  const feed = (amt) => {
    amt = amt || actionFeedIncrement;
    const ttotal = scoreHunger + amt;
    if (ttotal >= scoreHungerMax) scoreHunger = scoreHungerMax;
    else if (ttotal <= 0) scoreHunger = 0;
    else scoreHunger = ttotal;
  }
  
  const play = (amt) => {
    amt = amt || actionPlayIncrement;
    const ttotal = scoreFun + amt;
    if (ttotal >= scoreFunMax) scoreFun = scoreFunMax;
    else if (ttotal <= 0) scoreFun = 0;
    else scoreFun = ttotal;
  }

  const clean = (amt) => {
    amt = amt || actionCleanIncrement;
    const ttotal = scoreHygiene + amt;
    if (ttotal >= scoreHygieneMax) scoreHygiene = scoreHygieneMax;
    else if (ttotal <= 0) scoreHygiene = 0;
    else scoreHygiene = ttotal;
  }

  const sleep = (amt) => {
    amt = amt || actionSleepIncrement;
    const ttotal = scoreSleep + amt;
    if (ttotal >= scoreSleepMax) scoreSleep = scoreSleepMax;
    else if (ttotal <= 0) scoreSleep = 0;
    else scoreSleep = ttotal;
  }
  
  // Game Logic
  // every N ms reduce happiness due to hunger
  const hungerLoop = setInterval(makeHungry, decayRateHunger)
  function makeHungry() {
    if (scoreHunger)
      scoreHunger-=1;
  }
  
  // Game Logic
  // every N ms reduce happiness due to boredom
  const boredomLoop = setInterval(makeBored, decayRateFun)
  function makeBored() {
    if (scoreFun)
      scoreFun-=1;
  }

   // Game Logic
  // every N ms reduce happiness due to boredom
  const dirtyLoop = setInterval(makeDirty, decayRateHygiene)
  function makeDirty() {
    if (scoreHygiene)
      scoreHygiene-=1;
  }

   // Game Logic
  // every N ms reduce happiness due to boredom
  const sleepyLoop = setInterval(makeSleepy, decayRateEnergy)
  function makeSleepy() {
    if (scoreSleep)
      scoreSleep-=1;
  }
  
  
  // Rendering 
  // Render Loop -- the "game loop"
  // Renders our game state's result ever N ms.
  const loop = setInterval(render, renderSpeed);
  
  function render() {
    
    //creatureOutput.innerHTML = expressions[0];
    //const currentHappiness = (scoreHunger + scoreEnrichment) / 2;
    
    //shitty state machine for expressions
    //if (currentHappiness >= 0 && currentHappiness < 25)
   //   creatureOutput.innerHTML = expressions[3];
   // if (currentHappiness >= 25 && currentHappiness < 50)
    //  creatureOutput.innerHTML = expressions[2];
   // if (currentHappiness >= 50 && currentHappiness < 75)
   //   creatureOutput.innerHTML = expressions[1];
   // if (currentHappiness >= 75 && currentHappiness <= 100)
   //   creatureOutput.innerHTML = expressions[0];
    
    hungerLabel.innerText = "Hunger"
    hungerValueText.innerText = scoreHunger;
    hungerProgressBar.max = scoreHungerMax;
    hungerProgressBar.value = scoreHunger;
  
    funLabel.innerText = "Fun"
    funValueText.innerText = scoreFun;
    funProgressBar.max = scoreFunMax;
    funProgressBar.value = scoreFun;
    
    hygieneLabel.innerText = "Hygiene"
    hygieneValueText.innerText = scoreHygiene;
    hygieneProgressBar.max = scoreHygieneMax;
    hygieneProgressBar.value = scoreHygiene;

    energyLabel.innerText = "Sleep"
    energyValueText.innerText = scoreSleep;
    energyProgressBar.max = scoreSleepMax;
    energyProgressBar.value = scoreSleep;
  }


//let canvas = document.getElementById("gameScreen");
//let ctx = canvas.getContext("2d");
//ctx.fillStyle= "#f00";
//ctx.fillRect(20, 20, 100, 100);