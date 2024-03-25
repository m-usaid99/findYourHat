
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(height, width, percentage) {
       this._field = []; 
       this._height = height;
       this._width = width;
       this._percentage = percentage;
    }

    // getters 
    get field() {
        return this._field;
    }

    get height() {
        return this._height;
    }

    get width() {
        return this._width;
    }

    get percentage() {
        return this._percentage;
    }


    /* TODO: add a way to make the game not unwinnable
    */

    generateField() {
        let numHoles = (this.height * this.width) * (this.percentage / 100);
        for (var i=0; i < this.height; i++) {
            this.field.push([]);
        }        
        for (var i=0; i < this.height; i++) {
            for (var j=0; j< this.width; j++) {
                this.field[i].push(fieldCharacter);
            }
        }
        
        for (var k=numHoles; k >= 0; k--) {
            let holeX = Math.floor(Math.random() * this.width);
            let holeY = Math.floor(Math.random() * this.height);
            this.field[holeY][holeX] = hole;
        } 
        this.field[0][0] = pathCharacter;
        
        while (true) {
            let hatX = Math.floor(Math.random() * this.width);
            let hatY = Math.floor(Math.random() * this.height);
            
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

module.exports = {
    Field,
    hat, 
    hole, 
    pathCharacter, 
    fieldCharacter
};