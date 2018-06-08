var size0 = 20;
var size1 = 20;
var side = 20;

function main() {

    socket = io.connect('http://localhost:3000');
    socket.on('PushedObj', nkarel);

}

function setup() {
    createCanvas(size0 * side, size1 * side + 20);
}
col = '#acacac';
function nkarel(PushedObj) {
    var matrix = PushedObj.Matrix;
    var weather = PushedObj.Weather;

    if (weather == "spring") {
        col = '#E9FFC6';
    }
    else if (weather == "summer") {
        col = '#FFD2C6';
    }
    else if (weather == "autumn") {
        col = '#FFC78D';
    }
    else if (weather == "winter") {
        col = '#C6E7FF';
    }
    background(col);
    fill("black");
    text(weather, 50, 415);

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {


            if (matrix[y][x].Value == 1) {
                if (weather == 'winter') {
                    fill("#99DCA0");
                }
                else {
                    fill("green");
                }
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].Value == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].Value == 3) {
                fill("red");
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x].Value == 4) {
                fill("purple");
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x].Value == 0) {
                fill(col);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].Value == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }
}
window.onload = main;
