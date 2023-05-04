import {operations} from './operations.js'


const displayCurrent = document.getElementsByClassName('content')[0];
const displayCurrentStyles = getComputedStyle(displayCurrent);
const displayCurrentParentStyles = getComputedStyle(displayCurrent.parentNode);

document.addEventListener('keydown', (e) => {
    handle(e.key);        
})

document.addEventListener('click', (e) => {
   handle(e.target.innerText);
});

function handle (key){

    const CURRENT_WIDTH = displayCurrentStyles['width'];
    const CURRENT_PARENT_WIDTH = displayCurrentParentStyles['width'];
    const NUMBER = /^[0-9\.]$/.test(key);
    const OPERATION = /^[*\/\-+]{1}$/.test(key);
    const BUFFERPATTERN = /^[0-9]*(\.{1}[0-9]+)?[+\-\/*]{1}[0-9]*(\.{1}[0-9]+)?$/g

    
        //regular number or '.' button was pressed 
        if (CURRENT_WIDTH < CURRENT_PARENT_WIDTH){
            if (NUMBER){
                displayCurrent.textContent += key;
            }

            if(OPERATION){
                displayCurrent.textContent += key;
            }

            console.log("Text: " + displayCurrentStyles.width +" | Display: "+displayCurrentParentStyles.width+" | Key: "+ key);
        }

        if (BUFFERPATTERN.test(key)){
            console.log(`Pattern test - Key: ${key} - ${BUFFERPATTERN.test(key)}`);
            operations['operationHandler'](key);
        }
}

