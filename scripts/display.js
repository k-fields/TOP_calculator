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
    const OPERATION = /^[*\/\-+=]{1}$/.test(key);
    const BUFFERPATTERN = /^[0-9]*(\.{1}[0-9]+)?[+\-\/*]{1}[0-9]+(\.{1}[0-9]+)?$/
    const CURRENT_DISPLAY_VALUE = displayCurrent.textContent;

    
        //regular number or '.' button was pressed
        if(key === 'Clear'){
            displayCurrent.textContent = '';
            return;
        }
        
        if (CURRENT_WIDTH < CURRENT_PARENT_WIDTH){

            if (NUMBER){
                displayCurrent.textContent += key;
            }

            if(OPERATION){

                if (BUFFERPATTERN.test(CURRENT_DISPLAY_VALUE)){
                    console.log(`Pattern test - Key: ${key} - ${BUFFERPATTERN.test(CURRENT_DISPLAY_VALUE)}`);
                    operations['operationHandler'](key);
                }
                else if(key !== '=')
                    displayCurrent.textContent += key;
            }

            console.log("Text: " + displayCurrentStyles.width +" | Display: "+displayCurrentParentStyles.width+" | Key: "+ key);
        }

        
}

