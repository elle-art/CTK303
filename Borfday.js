let state = 0;

function preload() {
    party = loadSound("getBusy.mp3")
}

function setup() {
    createCanvas(500, 500);
    textAlign(CENTER);
    party.play();
}

function draw() {
  switch(state) {
    case 0: 
      fill("black");
      background("#b08a7d");
      textStyle(NORMAL);
      text("I have a joke about pizza...", width/2, height/2);
      break;

    case 1:
      fill("black");
      background("#f7e64a");
      textStyle(BOLD);
      text("but it's too cheesy!", width/2, height/2);
      break;
  }

  fill("#de5528");
  rect (100, 100, 100, 100);
}

function mouseReleased() {
    if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200) {
        state++;      
    if (state > 1) state = 0;
    } 
}
    
function mouseReleased() {
    if (party.isPlaying()){
        party.pause();
    }
    else {
        party.play();
    }
  }
  
  function touchStarted() {
    getAudioContext().resume();
  }