
// the divs within the container will be created here to make a grid

const container = document.querySelector('.sketchPad');
const eraseButton = document.querySelector('.Eraser');


function creatingGridOne(sizeOfGrid) {
    const wrapThis = document.createElement('div');
    wrapThis.classList.add('resetWrap');
    
    for (let i = 0; i < sizeOfGrid; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-rows');
        for(let p = 0; p < sizeOfGrid; p++ ) {
            const boxes = document.createElement('div');
            const widthAndHeight = 960/sizeOfGrid;
            boxes.classList.add('grid-boxes');
            boxes.style.width = `${widthAndHeight}px`;
            boxes.style.height = `${widthAndHeight}px`;

            boxes.addEventListener('mouseenter', () => {
                boxes.style.backgroundColor = 'black';
            })
            row.appendChild(boxes);
        }
        wrapThis.appendChild(row);
    }
    container.appendChild(wrapThis);

}



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



/*
const reSizing = document.querySelector('.sizing');
reSizing.style.cssText = 'display: flex; flex-direction: row; justify-content: center; gap: 40px; margin-top: 10px;'

const reSizingSmall = document.createElement('button');
reSizingSmall.classList.toggle('smallButton');
reSizingSmall.innerText = 'Small';
reSizingSmall.style.cssText = 'height: 20px; width: 50px;'

const reSizingMedium = document.createElement('button');
reSizingMedium.classList.toggle('mediumButton');
reSizingMedium.innerText = 'Medium';
reSizingMedium.style.cssText = 'height: 20px; width: 50px;'

const reSizingBig = document.createElement('button');
reSizingBig.classList.toggle('bigButton');
reSizingBig.innerText = 'Big';
reSizingBig.style.cssText = 'height: 20px; width: 50px;'

reSizing.appendChild(reSizingSmall);
reSizing.appendChild(reSizingMedium);
reSizing.appendChild(reSizingBig);

*/