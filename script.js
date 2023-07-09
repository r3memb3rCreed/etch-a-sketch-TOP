
// the divs within the container will be created here to make a grid

const containAll = document.querySelector('.contain-all');

const containOutputs = document.querySelector('.contain-outputs');

const container = document.querySelector('.sketchPad');

let currentGrid = null


const createGridA = document.createElement('div');
let boxStyle = 'display: flex; flex: 1; border: 1px solid lightgray;';

function creatingGridOne() {

    createGridA.classList.add('Grid');
    createGridA.style.cssText = 'display: flex; border: 4px solid red; flex-direction: column; background-color: white; height: 680px; width: 680px;';
    
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-rows');
        row.style.cssText ='display: flex; flex-direction: row; flex: 1;';

        for(let p = 0; p < 16; p++ ) {
            const boxes = document.createElement('div');
            boxes.style.cssText = boxStyle + 'width: 38px; height: 38px;'
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
    currentGrid = createGridA;

}



const createGridB = document.createElement('div');


function creatingGridTwo() {

    createGridB.classList.add('Grid');
    createGridB.style.cssText = 'display: flex; border: 4px solid red; flex-direction: column; background-color: white; height: 660px; width: 660px;';
    
    for (let i = 0; i < 32; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-rows');
        row.style.cssText ='display: flex; flex-direction: row; flex: 1;';

        for(let p = 0; p < 32; p++ ) {
            const boxes = document.createElement('div');
            boxes.style.cssText = boxStyle + 'width: 18px; height: 18px;'
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
    currentGrid = createGridB;


}

const createGridC = document.createElement('div');


function creatingGridThree() {

    createGridC.classList.add('Grid');
    createGridC.style.cssText = 'display: flex; border: 4px solid red; flex-direction: column; background-color: white; height: 705px; width: 650px;';
    
    for (let i = 0; i < 64; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-rows');
        row.style.cssText ='display: flex; flex-direction: row; flex: 1;';

        for(let p = 0; p < 64; p++ ) {
            const boxes = document.createElement('div');
            boxes.style.cssText = boxStyle + 'width: 9px; height: 9px;'
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
    currentGrid = createGridC;
}
    



// Control the Etch-a-Sketch
const controlBox = document.querySelector('.control-sketch')
const buttonControls = document.createElement('div');


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

controlBox.appendChild(buttonControls);
buttonControls.appendChild(sizingButtons);


function removeOldGrid() {
    if (currentGrid) {
      containOutputs.removeChild(currentGrid);
      currentGrid = null;
    }
}
  
  reSizingSmall.addEventListener('click', () => {
    removeOldGrid();
    creatingGridOne();
});
  
  reSizingMedium.addEventListener('click', () => {
    removeOldGrid();
    creatingGridTwo();
});
  
  reSizingBig.addEventListener('click', () => {
    removeOldGrid();
    creatingGridThree();
});

const resetButton = document.createElement('button');
resetButton.classList.add('reset');
resetButton.innerText = 'Reset';
resetButton.style.cssText = sizingCss + 'font-size: 18px; margin-top: 15px; margin-left: 80px;';
buttonControls.appendChild(resetButton);

resetButton.addEventListener('click', () => {
    removeOldGrid();
});