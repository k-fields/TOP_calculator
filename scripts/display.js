function multiply(){
    console.log("Trigger multiply");
}

function subtract() {
    console.log("Trigger subtract");
}

function add() {
    console.log("Trigger add");
}

function divide() {
    console.log("Trigger divide");
}
function equals() {
    console.log("Trigger equals");
}

const callbacks = {
    '*':multiply,
    '-':subtract,
    '+':add,
    '/':divide,
    '=':equals
}

const displayCurrent = document.getElementsByClassName('content')[0];
const displayCurrentStyles = getComputedStyle(displayCurrent);
const displayCurrentParentStyles = getComputedStyle(displayCurrent.parentNode);

document.addEventListener('keydown', (e) => {
    if (!(callbacks[e.key] !== undefined)){ //if key pressed is not tied to any function
        if (/[0-9\.]/.test(e.key) && 
        parseInt(displayCurrentStyles['width']) < parseInt(displayCurrentParentStyles['width']))
        {
            displayCurrent.textContent += e.key;
        }
        console.log("Text: " + displayCurrentStyles.width+" | Display: "+displayCurrentParentStyles.width+" | Key: "+e.key);
        
    }
    else
        callbacks[e.key]();
})

