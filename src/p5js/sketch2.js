var textLetters = ['D','Y', 'L','A','N','S','T','R','A','T','T','O','N'];
var yOff = 0.0;
var font;
var canvasHeight = 200;
var canvasWidth = 300;

function preload() {
  font = loadFont('../fonts/Raleway/Raleway-Regular.ttf');
}

function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);

  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');

}

function draw() {
  background(247, 248, 250);
  yOff = yOff + .005;
  textFont(font);
  fill(90, 97, 109);

  textSize(canvasWidth / 9);
  textAlign(CENTER, CENTER);
  var arrLength = textLetters.length;
  // var canvasWidth = (canvas.width) / 2;
  var gen = canvasWidth / arrLength;

  for (var i = 0; i < arrLength; i++) {
    var n = noise(3,i,yOff) * height;
    text(textLetters[i], i*(gen)+(gen / 2), n);
  }
}
