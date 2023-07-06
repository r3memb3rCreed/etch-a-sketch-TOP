
// the divs within the container will be created here to make a grid

const containAll = document.querySelector('.contain-all');

const container = document.querySelector('.sketchPad');

const rowOne = document.querySelector('.rowOne')

let boxStyle = 'display: flex; flex: 1; border: 1px solid lightgray;';

function creatingOne() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = boxStyle;
        rowOne.appendChild(boxes);

        for(let p = 0; p < 16; p++ ) {
            boxes.addEventListener('mouseenter', () => {
                boxes.style.cssText = boxStyle +'background-color: black;';
            })
            boxes.addEventListener('click', () => {
                item.style.cssText = boxStyle;
            })
        }
    }

}

const rowTwo = document.querySelector('.rowTwo');

function creatingTwo() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = boxStyle;
        rowTwo.appendChild(boxes);

        for(let p = 0; p < 16; p++ ) {
            boxes.addEventListener('mouseenter', () => {
                boxes.style.cssText = boxStyle +'background-color: black;';
            })
            boxes.addEventListener('click', () => {
                item.style.cssText = boxStyle;
            })
        }
    }


}



const rowThree = document.querySelector('.rowThree');

function creatingThree() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = boxStyle;

        rowThree.appendChild(boxes);

        for(let p = 0; p < 16; p++ ) {
            boxes.addEventListener('mouseenter', () => {
                boxes.style.cssText = boxStyle +'background-color: black;';
            })
            boxes.addEventListener('click', () => {
                item.style.cssText = boxStyle;
            })
        }
    }


}




const rowFour = document.querySelector('.rowFour');
function creatingFour() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = boxStyle;

        rowFour.appendChild(boxes);

        for(let p = 0; p < 16; p++ ) {
            boxes.addEventListener('mouseenter', () => {
                boxes.style.cssText = boxStyle +'background-color: black;';
            })
            boxes.addEventListener('click', () => {
                item.style.cssText = boxStyle;
            })
        }
    }

}




const rowFive = document.querySelector('.rowFive');

function creatingFive() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = boxStyle;

        rowFive.appendChild(boxes);


        for(let p = 0; p < 16; p++ ) {
            boxes.addEventListener('mouseenter', () => {
                boxes.style.cssText = boxStyle +'background-color: black;';
            })
            boxes.addEventListener('click', () => {
                item.style.cssText = boxStyle;
            })
        }
    }
}




const rowSix = document.querySelector('.rowSix');

function creatingSix() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = boxStyle;

        rowSix.appendChild(boxes);

        for(let p = 0; p < 16; p++ ) {
            boxes.addEventListener('mouseenter', () => {
                boxes.style.cssText = boxStyle +'background-color: black;';
            })
            boxes.addEventListener('click', () => {
                item.style.cssText = boxStyle;
            })
        }
    }
}




const rowSeven = document.querySelector('.rowSeven');

function creatingSeven() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = boxStyle;

        rowSeven.appendChild(boxes);


        for(let p = 0; p < 16; p++ ) {
            boxes.addEventListener('mouseenter', () => {
                boxes.style.cssText = boxStyle +'background-color: black;';
            })
            boxes.addEventListener('click', () => {
                item.style.cssText = boxStyle;
            })
        }
    }
}




const rowEight = document.querySelector('.rowEight');

function creatingEight() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = boxStyle;

        rowEight.appendChild(boxes);


        for(let p = 0; p < 16; p++ ) {
            boxes.addEventListener('mouseenter', () => {
                boxes.style.cssText = boxStyle +'background-color: black;';
            })
            boxes.addEventListener('click', () => {
                item.style.cssText = boxStyle;
            })
        }
    }
}




const rowNine = document.querySelector('.rowNine');

function creatingNine() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = boxStyle;

        rowNine.appendChild(boxes);


        for(let p = 0; p < 16; p++ ) {
            boxes.addEventListener('mouseenter', () => {
                boxes.style.cssText = boxStyle +'background-color: black;';
            })
            boxes.addEventListener('click', () => {
                item.style.cssText = boxStyle;
            })
        }
    }
}



const rowTen = document.querySelector('.rowTen');

function creatingTen() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = boxStyle;

        rowTen.appendChild(boxes);


        for(let p = 0; p < 16; p++ ) {
            boxes.addEventListener('mouseenter', () => {
                boxes.style.cssText = boxStyle +'background-color: black;';
            })
            boxes.addEventListener('click', () => {
                item.style.cssText = boxStyle;
            })
        }
    }
}




const rowEleven = document.querySelector('.rowEleven');

function creatingEleven() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = boxStyle;

        rowEleven.appendChild(boxes);


        for(let p = 0; p < 16; p++ ) {
            boxes.addEventListener('mouseenter', () => {
                boxes.style.cssText = boxStyle +'background-color: black;';
            })
            boxes.addEventListener('click', () => {
                item.style.cssText = boxStyle;
            })
        }
    }
}




const rowTwelve = document.querySelector('.rowTwelve');

function creatingTwelve() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = boxStyle;

        rowTwelve.appendChild(boxes);

        for(let p = 0; p < 16; p++ ) {
            boxes.addEventListener('mouseenter', () => {
                boxes.style.cssText = boxStyle +'background-color: black;';
            })
            boxes.addEventListener('click', () => {
                item.style.cssText = boxStyle;
            })
        }

    }
}




const rowThirteen = document.querySelector('.rowThirteen');
function creatingThirteen() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = boxStyle;

        rowThirteen.appendChild(boxes);

        for(let p = 0; p < 16; p++ ) {
            boxes.addEventListener('mouseenter', () => {
                boxes.style.cssText = boxStyle +'background-color: black;';
            })
            boxes.addEventListener('click', () => {
                item.style.cssText = boxStyle;
            })
        }
    }
}




const rowFourteen = document.querySelector('.rowFourteen');

function creatingFourteen() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = boxStyle;

        rowFourteen.appendChild(boxes);

        for(let p = 0; p < 16; p++ ) {
            boxes.addEventListener('mouseenter', () => {
                boxes.style.cssText = boxStyle +'background-color: black;';
            })
            boxes.addEventListener('click', () => {
                item.style.cssText = boxStyle;
            })
        }
    }
}




const rowFifteen = document.querySelector('.rowFifteen');

function  creatingFifteen() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = boxStyle;

        rowFifteen.appendChild(boxes);

        for(let p = 0; p < 16; p++ ) {
            boxes.addEventListener('mouseenter', () => {
                boxes.style.cssText = boxStyle +'background-color: black;';
            })
            boxes.addEventListener('click', () => {
                item.style.cssText = boxStyle;
            })
        }
    }
}




const rowSixteen = document.querySelector('.rowSixteen');

function creatingSixteen() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = boxStyle;

        rowSixteen.appendChild(boxes);

        for(let p = 0; p < 16; p++ ) {
            boxes.addEventListener('mouseenter', () => {
                boxes.style.cssText = boxStyle +'background-color: black;';
            })
            boxes.addEventListener('click', () => {
                item.style.cssText = boxStyle;
            })
        }
    }
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
        
        // try and delete the wrapThis node only if the containAll div actually has it as a child...Or just move on.
        //if (containAll.childNodes())
        //containAll.removeChild(wrapThis);
        containAll.appendChild(container);
        creatingOne();
        creatingTwo();
        creatingThree();
        creatingFour();
        creatingFive();
        creatingSix();
        creatingSeven();
        creatingEight();
        creatingNine();
        creatingTen();
        creatingEleven();
        creatingTwelve();
        creatingThirteen();
        creatingFourteen();
        creatingFifteen();
        creatingSixteen();
    })

    reSizingMedium.addEventListener('click', () => {
        containAll.removeChild(container);
        creatingGridTwo();
    })

}

callGrid();

const wrapThis = document.createElement('div');


function creatingGridTwo() {

    wrapThis.classList.add('newGrid');
    wrapThis.style.cssText = 'display: flex; border: 4px solid red; flex-direction: column; background-color: white; height: 500px; width: 500px;';
    
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
            row.appendChild(boxes);
        }
        wrapThis.appendChild(row);
    }
    containAll.appendChild(wrapThis);

}


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