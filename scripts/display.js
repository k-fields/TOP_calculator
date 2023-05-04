import {operations} from './operations.js'


const displayCurrent = document.getElementsByClassName('content')[0];
const displayCurrentStyles = getComputedStyle(displayCurrent);
const displayCurrentParentStyles = getComputedStyle(displayCurrent.parentNode);

let buffer = [];

document.addEventListener('keydown', (e) => {
    handle(e.key);        
})

document.addEventListener('click', (e) => {
   handle(e.target.innerText);
});

function handle (key){
    if (/[0-9\.]/.test(parseInt(key)) && 
        parseInt(displayCurrentStyles['width']) < parseInt(displayCurrentParentStyles['width']))
        {
            displayCurrent.textContent += parseInt(key);
        }
        console.log("Text: " + displayCurrentStyles.width +" | Display: "+displayCurrentParentStyles.width+" | Key: "+ key);
}
