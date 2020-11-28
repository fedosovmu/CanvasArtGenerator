var mainColor = ["#E8252D", "#3D5FA9", "#F6C217", "#000000"];
// Массив цветов

var example = document.getElementById('example');
var ctx = example.getContext('2d');

example.width = 600;
example.height = 400;
// Холст

function matrixRandom(a,b) {
    return Math.random() - 0.5;
}
mainColor.sort(matrixRandom);
// Перемешивание массива

function getRandom(min, max) {
    var randomCalc = Math.floor(Math.random() * (+max - +min) + +min);
    return randomCalc;
} 
    // Рандом

function createThemeColor() {
    
    function matrixRandom(a,b) {
        return Math.random() - 0.5;
    }
    
    mainColor.sort(matrixRandom);
    // Перемешивание массива
    
    var colorVar = getRandom(0, 2);
    // Определение цветовой темы
}

function createBox(color) {
    ctx.fillStyle = color;
    var boxSize = getRandom(70, 180);
    var boxPositionX = getRandom(0, example.width);
    var boxPositionY = getRandom(0, example.height);
    ctx.fillRect(boxPositionX, boxPositionY, boxSize, boxSize);
    // Квадрат
}

function createLine() {
    ctx.fillStyle = "#000000";
    var lineSizeX = getRandom(400, 800);
    var lineSizeY = getRandom(2, 7);
    var linePositionX = getRandom(0, example.width/2);
    var linePositionY = getRandom(0, example.height);
    ctx.save();
    // ctx.translate(-example.width/2, -example.height/2);
    ctx.rotate(getRandom(-60, 60) * Math.PI / 180);
    ctx.fillRect(linePositionX, linePositionY, lineSizeX, lineSizeY);
    ctx.restore();
    // Квадрат
}

function createCircle(color) {
    ctx.fillStyle = color;
    //ctx.fillStyle = mainColor[1];
    var circleSize = getRandom(90, 220);
    var circlePositionX = getRandom(circleSize / 2, example.width - circleSize / 2);
    var circlePositionY = getRandom(0, example.height);
    ctx.beginPath();
    ctx.arc(circlePositionX, circlePositionY, circleSize, 0, 2 * Math.PI, true);
    ctx.fill();
    // Круг
}

function createTriangle (color) {
    ctx.fillStyle = color;
    var triangleSize = getRandom(75, 200);
    var trianglePositionX = getRandom(triangleSize, example.width - triangleSize);
    var trianglePositionY = getRandom(0, example.height);
    var tiangleAspectRatio = 8 / 5
    ctx.beginPath();
    ctx.moveTo(trianglePositionX,trianglePositionY);
    ctx.lineTo(trianglePositionX + triangleSize,trianglePositionY + tiangleAspectRatio * triangleSize);
    ctx.lineTo(trianglePositionX - triangleSize,trianglePositionY + tiangleAspectRatio * triangleSize);
    ctx.fill();
    //Треуглоьник
}

function clearArtboard () {
    ctx.clearRect(0, 0, example.width, example.height);
    ctx.strokeRect(0, 0, example.width, example.height);
}

function newComposition() {
    clearArtboard();
    createThemeColor();
    var figures = [createBox, createTriangle, createCircle,]
    figures.sort(matrixRandom);
    for (var i = 0; i < 3; i++)
    {
        figures[i](mainColor[i]);
    }
    //figures[1](mainColor[1]);
    //figures[2](mainColor[2]);

    if (Math.random() < 0.9) {    
    createCircle(mainColor[3])
    }
    for (var i = 0; i < getRandom(0, 3); i++) {
        createLine();
    }    
}

newComposition();


