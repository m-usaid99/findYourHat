// const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor() {
       this._field = []; 
    }

    get field() {
        return this._field;
    }


    // generate field for game
    generateField(height, width, percentage) {
        let numHoles = (height * width) * (percentage / 100);
        for (var i=0; i < height; i++) {
            this.field.push([]);
        }        
        for (var i=0; i < height; i++) {
            for (var j=0; j< width; j++) {
                this.field[i].push(fieldCharacter);
            }
        }
        
        for (var k=numHoles; k >= 0; k--) {
            let holeX = Math.floor(Math.random() * width);
            let holeY = Math.floor(Math.random() * height);
            this._field[holeY][holeX] = hole;
        } 
        this._field[0][0] = pathCharacter;
        
        while (true) {
            let hatX = Math.floor(Math.random() * width);
            let hatY = Math.floor(Math.random() * height);
            
            if (hatX != 0 && hatY != 0) {
                this.field[hatY][hatX] = hat;
                break;
            }
        }
    }
        
    printField() {
        for (var i = 0; i < this.field.length; i++) {
            console.log(this.field[i].join(''));
        } 
    }

}


const myField = new Field();
myField.generateField(8,6,30);
myField.printField();