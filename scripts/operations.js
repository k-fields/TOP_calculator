export const operations = {
    'multiply': (elements) => {
        if (!elements || elements.length == 1) return;
        
        return elements.reduce((acc, element) => acc *= element);
    },
    'subtract': (elements) => {
        if (!elements || elements.length == 1) return;

        return elements.reduce((acc, element) => acc -= element);
    },
    'add': (elements) => {
        if (!elements || elements.length == 1) return;

        return elements.reduce((acc, element) => acc += element);
    },
    'divide': (elements) => {
        if (!elements || elements.length == 1 || elements[1] == 0) return;
        
        return elements.reduce((acc, element) => acc /= element);
    },
    'operationHandler': (buffer) => {
        console.log("Operations handler called.")
    },
}

/*
console.log(`Multiply 2*3*5: ${operations.multiply([2,3,5])}`);
console.log(`Subtract 4 - 5: ${operations.subtract([4,5])}`);
console.log(`Add 5+2+3: ${operations.add([5,2,3])}`);
console.log(`Divide 5/2: ${operations.divide([5,2])}`);
*/