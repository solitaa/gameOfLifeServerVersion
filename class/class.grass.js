module.exports = class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x].Value == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var index = Math.floor(Math.random()*emptyCells.length);
        var newCell = emptyCells[index];

        var waterCellsss = this.chooseCell(5);
        var i = Math.floor(Math.random()*emptyCells.length);
        var waterCell = waterCellsss[i];

        if (waterCell != undefined && newCell != undefined && this.multiply >= 2) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX].Value = this.index; 

            var newGrass = new Grass(newX, newY, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
        else if (newCell && this.multiply >= 4) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX].Value = this.index;

            var newGrass = new Grass(newX, newY, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }
}
   