import {operations, handler} from './operations.js'

const execute = {
    '*':operations.multiply,
    '+':operations.add,
    '-':operations.subtract,
    '/':operations.divide,
    '=':operations.equals,
    'Enter':operations.equals
}

const displayCurrent = document.getElementsByClassName('content')[0];
const displayCurrentStyles = getComputedStyle(displayCurrent);
const displayCurrentParentStyles = getComputedStyle(displayCurrent.parentNode);

let buffer = [];

document.addEventListener('keydown', (e) => {
    if (!(execute[e.key] !== undefined)){ //if key pressed is not tied to any function
        if (/[0-9\.]/.test(e.key) && 
        parseInt(displayCurrentStyles['width']) < parseInt(displayCurrentParentStyles['width']))
        {
            displayCurrent.textContent += e.key;
        }
        console.log("Text: " + displayCurrentStyles.width+" | Display: "+displayCurrentParentStyles.width+" | Key: "+e.key);
        
    }
    else
    {
        if (displayCurrent.textContent && !buffer){
            buffer[1] = displayCurrent.textContent;
            buffer[0] = e.key;
            displayCurrent.textContent += e.key;
        }
        else if (displayCurrent.textContent && buffer){
            buffer[2] = 
        }
        handler(buffer)
    }
})



