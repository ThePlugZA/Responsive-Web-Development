const preview = document.getElementById("preview");
const display = document.getElementById("display"); 

let currentValue = "";
let equalClicked = false;    
let operatorSelected = false

const operatorButtons = Array.from(document.querySelectorAll(".operator")); 
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        operatorSelected = true;
        currentValue += button.textContent;
        preview.textContent = currentValue; // Update the preview element with the currentValue
        display.textContent = "0";
    });
});

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        const number = button.textContent;
        if (currentValue.length === 0 && number === "0") {
            return;
        } else if (currentValue.length === 1 && currentValue === "0" && number === "0") {
            return;
        }
        if (number === "." && display.textContent.includes(".")) {
            return; // return early if the user tries to input a decimal after one has already been entered
        }

        display.textContent = (display.textContent === "0") ? number : display.textContent + number;
        currentValue += number; // Add the number to the currentValue variable
        preview.textContent = currentValue; // Update the preview element with the currentValue
    });
});

const clear = document.getElementById("clear");
    clear.addEventListener("click", () => {
        currentValue = "";
        display.textContent = "0";
        preview.textContent = "";
    });

function delBtn(){
    if (currentValue.length > 0) {
        currentValue = currentValue.slice(0, -1); // Remove the last character from the currentValue variable
        display.textContent = currentValue; // Update the display element with the modified currentValue
        preview.textContent = currentValue;
    }
    else if (display.textContent === "") {
        display.textContent = "0";
    }

}
const deleteButton = document.getElementById("delete");  
    deleteButton.addEventListener("click", delBtn())


function errorHandler() {
    try {
        let calculationString = preview.textContent;
        calculationString = calculationString.replace(/x/g, "*");
        calculationString = calculationString.replace(/&divide;/g, "/");
    
        let result = math.evaluate(calculationString);
        display.textContent = result;
        preview.textContent = calculationString;
    } catch (error) {
        display.textContent = "Syntax Error";
        preview.textContent = "";
        currentValue = ""
    }
}
    
function findAnswer() {
    equalClicked = true
    let calculationString = preview.textContent;
    calculationString = calculationString.replace(/x/g, "*");
    calculationString = calculationString.replace(/&divide;/g, "/");

    errorHandler();
    let result = math.evaluate(calculationString);
    display.textContent = result;
    preview.textContent = calculationString;
    
    if (operatorSelected && equalClicked) {
    equalClicked = false;
    currentValue = result;
    currentValue += button.textContent;
    preview.textContent = currentValue;
    display.textContent = "0"
    }
}

const equalButton = document.getElementById("equals");
    equalButton.addEventListener("click",  findAnswer());
/*
        //function for button to run equal

    document.addEventListener("keydown", function(event) { //change function executed when 'Enter' key is clicked
        if (event.keyCode === 13) {
          findAnswer();
        }
      });

*/

    //function for button for backspce
    //function to run keypad
      document.addEventListener("keydown", function(event) {
        if(event.keyCode === 8)
            delBtn()
      })