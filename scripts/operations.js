export const operations = {
    'multiply': (elements) => {
        if (!elements || elements.length == 1) return;
        
        return elements.reduce((acc, element) => acc *= element);
        console.log("Trigger multiply: " + elements)
    },
    'subtract': () => {
        console.log("Trigger subtract");
    },
    'add': () => {
        console.log("Trigger add");
    },
    'divide': () => {
        console.log("Trigger divide");
    },
    'equals': () => {
        console.log("Trigger equals");
    },
}

export function handler(buffer){
    if (buffer.length > 2) {
            
        if (operations[buffer[0]] === undefined) return;

        operations[buffer[0]](buffer.slice(1));

        }
}

console.log(operations.multiply([2,3,5]));