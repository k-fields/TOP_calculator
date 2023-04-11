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

document.addEventListener('keydown', (e) => {
    if (!(callbacks[e.key] !== undefined)){ //if key pressed is not tied to any function
        if (/[0-9\.]/.test(e.key))  
            console.log("You pressed " + e.key);
    }
    else
        callbacks[e.key]();
})

