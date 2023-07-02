
// the divs within the container will be created here to make a grid
const rowOne = document.querySelector('.rowOne')

function creatingOne() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = 'display: flex; flex: 1;';
        rowOne.appendChild(boxes);

        for (let item of document.querySelectorAll('.rowOne div')) {
            item.addEventListener('mouseover', () => {
              item.style.cssText = boxes.style.cssText + ' background-color: black;';
            });
        }
    }

}




const rowTwo = document.querySelector('.rowTwo');

function creatingTwo() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = 'display: flex; flex: 1;';
    
        rowTwo.appendChild(boxes);

        for (let item of document.querySelectorAll('.rowTwo div')) {
            item.addEventListener('mouseover', () => {
              item.style.cssText = boxes.style.cssText + ' background-color: black;';
            });
          }
    }

    
}



const rowThree = document.querySelector('.rowThree');

function creatingThree() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = 'display: flex; flex: 1;';
    
        rowThree.appendChild(boxes);

        for (let item of document.querySelectorAll('.rowThree div')) {
            item.addEventListener('mouseover', () => {
              item.style.cssText = boxes.style.cssText + ' background-color: black;';
            });
          }
    }

    
}




const rowFour = document.querySelector('.rowFour');
function creatingFour() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = 'display: flex; flex: 1;';
    
        rowFour.appendChild(boxes);

        for (let item of document.querySelectorAll('.rowFour div')) {
            item.addEventListener('mouseover', () => {
              item.style.cssText = boxes.style.cssText + ' background-color: black;';
            });
          }
    }

}




const rowFive = document.querySelector('.rowFive');

function creatingFive() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = 'display: flex; flex: 1;';
    
        rowFive.appendChild(boxes);
    

        for (let item of document.querySelectorAll('.rowFive div')) {
            item.addEventListener('mouseover', () => {
                item.style.cssText = boxes.style.cssText + ' background-color: black;';
            });
        }
    }
}




const rowSix = document.querySelector('.rowSix');

function creatingSix() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = 'display: flex; flex: 1;';
    
        rowSix.appendChild(boxes);

        for (let item of document.querySelectorAll('.rowSix div')) {
            item.addEventListener('mouseover', () => {
                item.style.cssText = boxes.style.cssText + ' background-color: black;';
            });
        }
    }
}




const rowSeven = document.querySelector('.rowSeven');

function creatingSeven() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = 'display: flex; flex: 1;';
    
        rowSeven.appendChild(boxes);
    

        for (let item of document.querySelectorAll('.rowSeven div')) {
            item.addEventListener('mouseover', () => {
                item.style.cssText = boxes.style.cssText + ' background-color: black;';
            });
        }
    }
}




const rowEight = document.querySelector('.rowEight');

function creatingEight() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = 'display: flex; flex: 1;';
    
        rowEight.appendChild(boxes);
    

        for (let item of document.querySelectorAll('.rowEight div')) {
            item.addEventListener('mouseover', () => {
                item.style.cssText = boxes.style.cssText + ' background-color: black;';
            });
        }
    }
}




const rowNine = document.querySelector('.rowNine');

function creatingNine() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = 'display: flex; flex: 1;';
    
        rowNine.appendChild(boxes);
    

        for (let item of document.querySelectorAll('.rowNine div')) {
            item.addEventListener('mouseover', () => {
                item.style.cssText = boxes.style.cssText + ' background-color: black;';
            });
        }
    }
}



const rowTen = document.querySelector('.rowTen');

function creatingTen() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = 'display: flex; flex: 1;';
    
        rowTen.appendChild(boxes);
    

        for (let item of document.querySelectorAll('.rowTen div')) {
            item.addEventListener('mouseover', () => {
                item.style.cssText = boxes.style.cssText + ' background-color: black;';
            });
        }
    }
}




const rowEleven = document.querySelector('.rowEleven');

function creatingEleven() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = 'display: flex; flex: 1;';
    
        rowEleven.appendChild(boxes);
    

        for (let item of document.querySelectorAll('.rowEleven div')) {
            item.addEventListener('mouseover', () => {
                item.style.cssText = boxes.style.cssText + ' background-color: black;';
            });
      }
    }
}




const rowTwelve = document.querySelector('.rowTwelve');

function creatingTwelve() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = 'display: flex; flex: 1;';
    
        rowTwelve.appendChild(boxes);

        for (let item of document.querySelectorAll('.rowTwelve div')) {
            item.addEventListener('mouseover', () => {
              item.style.cssText = boxes.style.cssText + ' background-color: black;';
            });
          }

    }
}




const rowThirteen = document.querySelector('.rowThirteen');
function creatingThirteen() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = 'display: flex; flex: 1;';
    
        rowThirteen.appendChild(boxes);

        for (let item of document.querySelectorAll('.rowThirteen div')) {
            item.addEventListener('mouseover', () => {
              item.style.cssText = boxes.style.cssText + ' background-color: black;';
            });
          }
    }
}




const rowFourteen = document.querySelector('.rowFourteen');

function creatingFourteen() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = 'display: flex; flex: 1;';
    
        rowFourteen.appendChild(boxes);

        for (let item of document.querySelectorAll('.rowFourteen div')) {
            item.addEventListener('mouseover', () => {
                item.style.cssText = boxes.style.cssText + ' background-color: black;';
            });
        }
    }
}




const rowFifteen = document.querySelector('.rowFifteen');

function  creatingFifteen() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = 'display: flex; flex: 1;';
    
        rowFifteen.appendChild(boxes);
        
        for (let item of document.querySelectorAll('.rowFifteen div')) {
            item.addEventListener('mouseover', () => {
                item.style.cssText = boxes.style.cssText + ' background-color: black;';
            });
        }
    }
}




const rowSixteen = document.querySelector('.rowSixteen');

function creatingSixteen() {
    for (let i = 0; i < 16; i++) {
        let boxes = document.createElement('div');
        boxes.style.cssText = 'display: flex; flex: 1;';
    
        rowSixteen.appendChild(boxes);

        for (let item of document.querySelectorAll('.rowSixteen div')) {
          item.addEventListener('mouseover', () => {
            item.style.cssText = boxes.style.cssText + ' background-color: black;';
          });
        }
        
    }
}

function callGrid() {
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
}

callGrid();

