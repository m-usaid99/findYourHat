const {Field, hat, hole, pathCharacter, fieldCharacter} = require('./field.js');
const prompt = require('prompt-sync')({sigint: true});

class Game {

}

const myField = new Field(12,8,40);
myField.generateField();
myField.printField();