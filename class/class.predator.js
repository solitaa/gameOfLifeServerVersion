var LivingCreatures = require("./class.livingcreatures");
module.exports = class Predator extends LivingCreatures{
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
    }
    
    move() {

        var emptyCells = this.chooseCell(0);
        var index = Math.floor(Math.random()*emptyCells.length);
        var newCell = emptyCells[index];

        if (newCell != undefined) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x].Value = this.index;
            matrix[newY][newX].Value = 3;
            this.x = newX;
            this.y = newY;

            matrix[this.y][this.x].Age++;
        }
    }

    eat() {
        var emptyCells = this.chooseCell(2);
        var index = Math.floor(Math.random()*emptyCells.length);
        var newCell = emptyCells[index];

        if (newCell != undefined) {
            this.energy++;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x].Value = 0;
            matrix[newY][newX].Value = 3;
            this.x = newX;
            this.y = newY;

            for (var i in grasseaterArr) {
                if (newX == grasseaterArr[i].x && newY == grasseaterArr[i].y) {
                    grasseaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 30) {
                this.mul();
            }
        }

        else {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var index = Math.floor(Math.random()*emptyCells.length);
        var newCell = emptyCells[index];

        if ((weather == "spring" || weather == "summer" || weather == "autumn") && newCell && grasseaterArr.length >= 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX].Value = this.index;

            var newpredator = new Predator(newX, newY, this.index);
            predatorArr.push(newpredator);
            this.energy = 6;
        }
        
        if (newCell && weather == "winter" && grasseaterArr.length >= 20) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX].Value = this.index;

            var newpredator = new Predator(newX, newY, this.index);
            predatorArr.push(newpredator);
            this.energy = 6;
        }
    }

    die() {
        matrix[this.y][this.x].Value = 0;
        console.log(matrix[this.y][this.x]);
        obj.arr.push({'who': "Predator",'gender':matrix[this.y][this.x].Value, 'age': matrix[this.y][this.x].Age});
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }
}