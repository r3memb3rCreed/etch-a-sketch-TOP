
// the divs within the container will be created here to make a grid

const containAll = document.querySelector('.contain-all');

const containOutputs = document.querySelector('.contain-outputs');

const container = document.querySelector('.sketchPad');




const createGridA = document.createElement('div');
let boxStyle = 'display: flex; flex: 1; border: 1px solid lightgray;';

function creatingGridOne() {

    createGridA.classList.add('Grid-16');
    createGridA.style.cssText = 'display: flex; border: 4px solid red; flex-direction: column; background-color: white; height: 614px; width: 614px;';
    
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-rows');
        row.style.cssText ='display: flex; flex-direction: row; flex: 1;';

        for(let p = 0; p < 16; p++ ) {
            const boxes = document.createElement('div');
            boxes.style.cssText = boxStyle
            boxes.addEventListener('mouseenter', () => {
                boxes.style.backgroundColor = 'black';
            })
            boxes.addEventListener('click', () => {
                boxes.style.cssText = boxStyle;
            })
            row.appendChild(boxes);
        }
        createGridA.appendChild(row);
    }
    containOutputs.appendChild(createGridA);

}



const createGridB = document.createElement('div');


function creatingGridTwo() {

    createGridB.classList.add('Grid-32');
    createGridB.style.cssText = 'display: flex; border: 4px solid red; flex-direction: column; background-color: white; height: 625px; width: 625px;';
    
    for (let i = 0; i < 32; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-rows');
        row.style.cssText ='display: flex; flex-direction: row; flex: 1;';

        for(let p = 0; p < 32; p++ ) {
            const boxes = document.createElement('div');
            boxes.style.cssText = boxStyle
            boxes.addEventListener('mouseenter', () => {
                boxes.style.backgroundColor = 'black';
            })
            boxes.addEventListener('click', () => {
                boxes.style.cssText = boxStyle;
            })
            row.appendChild(boxes);
        }
        createGridB.appendChild(row);
    }
    containOutputs.appendChild(createGridB);

}

const createGridC = document.createElement('div');


function creatingGridThree() {

    createGridC.classList.add('Grid-64');
    createGridC.style.cssText = 'display: flex; border: 4px solid red; flex-direction: column; background-color: white; height: 625px; width: 625px;';
    
    for (let i = 0; i < 64; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-rows');
        row.style.cssText ='display: flex; flex-direction: row; flex: 1;';

        for(let p = 0; p < 64; p++ ) {
            const boxes = document.createElement('div');
            boxes.style.cssText = boxStyle
            boxes.addEventListener('mouseenter', () => {
                boxes.style.backgroundColor = 'black';
            })
            boxes.addEventListener('click', () => {
                boxes.style.cssText = boxStyle;
            })
            row.appendChild(boxes);
        }
        createGridC.appendChild(row);
    }
    containOutputs.appendChild(createGridC);

}
    



// Control the Etch-a-Sketch
let controlBox = document.querySelector('.control-sketch')

const sizingCss = 'height: 25px; width: 60px; color: #5A4FCF; background-color: #1d1160;' 
const sizingButtons = document.createElement('div');
sizingButtons.classList.add('sizingButtons');
sizingButtons.style.cssText = 'display: flex; flex-direction: row; gap: 20px; margin-top: 14px;';



const reSizingSmall = document.createElement('button');
reSizingSmall.classList.toggle('smallButton');
reSizingSmall.innerText = 'Small';
reSizingSmall.style.cssText = sizingCss + 'font-size: 12px;';

const reSizingMedium = document.createElement('button');
reSizingMedium.classList.toggle('mediumButton');
reSizingMedium.innerText = 'Medium';
reSizingMedium.style.cssText = sizingCss + 'font-size: 15px;';

const reSizingBig = document.createElement('button');
reSizingBig.classList.toggle('bigButton');
reSizingBig.innerText = 'Big';
reSizingBig.style.cssText = sizingCss + 'font-size: 18px;';

sizingButtons.appendChild(reSizingSmall);
sizingButtons.appendChild(reSizingMedium);
sizingButtons.appendChild(reSizingBig);

controlBox.appendChild(sizingButtons);


function callGrid() {
    reSizingSmall.addEventListener('click', () => {
        if(containOutputs.querySelector('.Grid-16') === null && containOutputs.querySelector('.Grid-32') === null && containOutputs.querySelector('.Grid-64') === null){
            creatingGridOne();
        } else if (containOutputs.querySelector('.Grid-16') === null && containOutputs.querySelector('.Grid-32') !== null ){
            if (containOutputs.contains(createGridB)){
                containOutputs.removeChild(createGridB);
            }

            creatingGridOne();
        } else if (containOutputs.querySelector('.Grid-16') === null && containOutputs.querySelector('.Grid-64') !== null){
            if (containOutputs.contains(createGridC)){
                containOutputs.removeChild(createGridC);
            }
            creatingGridOne();
        }
        
    })

    reSizingMedium.addEventListener('click', () => {
        if(containOutputs.querySelector('.Grid-32') === null && containOutputs.querySelector('.Grid-16') === null && containOutputs.querySelector('.Grid-64') === null){
            creatingGridTwo();
        } else if (containOutputs.querySelector('.Grid-32') === null && containOutputs.querySelector('.Grid-16') !== null){
            if (containOutputs.contains(createGridA)){
                containOutputs.removeChild(createGridA);
            }

            creatingGridTwo();
        } else if (containOutputs.querySelector('.Grid-32') === null && containOutputs.querySelector('.Grid-64') !== null){
            if (containOutputs.contains(createGridC)){
                containOutputs.removeChild(createGridC);
            }

            creatingGridTwo();
        }
    })

    reSizingBig.addEventListener('click', () => {
        if(containOutputs.querySelector('.Grid-64') === null && containOutputs.querySelector('.Grid-32') === null && containOutputs.querySelector('.Grid-16') === null){
            creatingGridThree();
        } else if (containOutputs.querySelector('.Grid-64') === null && containOutputs.querySelector('.Grid-16') !== null){
            if (containOutputs.contains(createGridA)){
                containOutputs.removeChild(createGridA);
            }

            creatingGridThree();
        } else if (containOutputs.querySelector('.Grid-64') === null && containOutputs.querySelector('Grid-32') !== null ){
            if (containOutputs.contains(createGridB)){
                containOutputs.removeChild(createGridB);
            }
            
            creatingGridThree();
        }
    });

}

callGrid();



/*
eraseButton.addEventListener('click', () => {
    let newDimension = Number(prompt("What is dimensions would you like for your sketch?"))
    
    while (newDimension > 100) {
        const enterADimension = Number(prompt("Pick a smaller number..."));
    }
    const wrapThis = document.querySelector('.resetWrap');
    
    if (!wrapThis) {
        creatingGridOne(newDimension);
    } else {
        wrapThis.remove();
        creatingGridOne(newDimension);
    }

});

*/

/*
...

*/