import {operations} from './operations.js'

const execute = {
    '*':operations.multiply
}

const displayCurrent = document.getElementsByClassName('content')[0];
const displayCurrentStyles = getComputedStyle(displayCurrent);
const displayCurrentParentStyles = getComputedStyle(displayCurrent.parentNode);

document.addEventListener('keydown', (e) => {
    if (!(execute[e.key] !== undefined)){ //if key pressed is not tied to any function
        if (/[0-9\.]/.test(e.key) && 
        parseInt(displayCurrentStyles['width']) < parseInt(displayCurrentParentStyles['width']))
        {
            displayCurrent.textContent += e.key;
        }
        console.log("Text: " + displayCurrentStyles.width+" | Display: "+displayCurrentParentStyles.width+" | Key: "+e.key);
        
    }

})



console.log(execute['*']([2,3]));