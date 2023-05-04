import {operations} from './operations.js'


const displayCurrent = document.getElementsByClassName('content')[0];
const displayCurrentStyles = getComputedStyle(displayCurrent);
const displayCurrentParentStyles = getComputedStyle(displayCurrent.parentNode);

let buffer = [];

document.addEventListener('keydown', (e) => {
    
        if (/[0-9\.]/.test(parseInt(e.key)) && 
        parseInt(displayCurrentStyles['width']) < parseInt(displayCurrentParentStyles['width']))
        {
            displayCurrent.textContent += parseInt(e.key);
        }
        console.log("Text: " + displayCurrentStyles.width+" | Display: "+displayCurrentParentStyles.width+" | Key: "+e.key);
        
})

document.addEventListener('click', (e) => {
   // execute['handler'];
});
