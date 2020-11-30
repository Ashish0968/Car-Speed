var car , carwhite , cargreen , carred , caryellow;

function preload() {
}

function setup () {
  createCanvas(1800,800)
  car = createSprite(50, 400, 50, 50);
  car.shapeColor = "white";

}

function draw() {
  background(black);  



  drawSprites();
}