const display = document.getElementById("display");

//audio IDs
const audioFiles = {
   "Heater-1": document.getElementById("H-1"),
   "Heater-2": document.getElementById("H-2"),
   "Heater-3": document.getElementById("H-3"),
   "Heater-4": document.getElementById("H-4"),
   "Clap": document.getElementById("O-Clap"),
   "Kick&Hat": document.getElementById("Kick&Hat"),
   "Kick": document.getElementById("o-Kick"),
   "Closed-HH": document.getElementById("cl-HH"),
   "Open-HH": document.getElementById("o-HH")
};

//function that play audio and display label
function playAudio(audioID) {
   audioFiles[audioID].play();
   display.textContent = audioID.replace(/-/g, " ");
}

//button event listeners that play audio when pressed
const buttons = {
   "Heater-1": "Heater-1",
   "Heater-2": "Heater-2",
   "Heater-3": "Heater-3",
   "Heater-4": "Heater-4",
   "Clap": "Clap",
   "Open-HH": "Open-HH",
   "Closed-HH": "Closed-HH",
   "Kick-n-Hat": "Kick&Hat",
   "Kick": "Kick"
};

for (const button in buttons) {
   const btnElement = document.getElementById(button);
   btnElement.addEventListener("click", () => playAudio(buttons[button]));
}

//keyboard event listeners that play audio when key is pressed
document.addEventListener("keydown", function(event) {
   switch (event.keyCode) {
      case 81:
         playAudio("Heater-1");
         break;
      case 87:
         playAudio("Heater-2");
         break;
      case 69:
         playAudio("Heater-3");
         break;
      case 65:
         playAudio("Heater-4");
         break;
      case 83:
         playAudio("Clap");
         break;
      case 68:
         playAudio("Open-HH");
         break;
      case 90:
         playAudio("Closed-HH");
         break;
      case 88:
         playAudio("Kick&Hat");
         break;
      case 67:
         playAudio("Kick");
         break;
      default:
         break;
   }
});

const volumeSlider = document.getElementById("volume-slider");
volumeSlider.addEventListener("input", function() {
   for (const audioFile in audioFiles) {
      audioFiles[audioFile].volume = this.value;
   }
});