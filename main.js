const {Field, hat, hole, pathCharacter, fieldCharacter} = require('./field.js');
const prompt = require('prompt-sync')({sigint: true});

class Game {
    constructor(height, width, percentage) {
        this._field = new Field(height, width, percentage);
        this._height = height;
        this._width = width;
        this._field.generateField();
        this._player = new Player(0, 0);
        this._blankField = new Field(height, width, 0);
    }

    get field() {
        return this._field;
    }

    printGame() {
        this._field.printField();
    }
    
     

}

class Player {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }
    
    get y() {
        return this._y;
    }

    moveUp() {
        this.y++;
    }

    moveDown() {
        this.y--;
    }

    moveLeft() {
        this.x--;
    }

    moveRight() {
        this.x++;
    }
}

const game = new Game(12, 8, 30);