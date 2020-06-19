
var font;
var vehicles = [];
var bi;
var f
var p
var p1
function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
  bi = loadImage('bi1.jpg')
  f = loadImage('f.png');
  p = loadStrings("poem.txt")
 
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(51);
  
  var points = font.textToPoints('HAPPY FATHERS DAY', 100, 400, 116, {
    sampleFactor: 0.35
  });
   for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    
    var vehicle = new Vehicle(pt.x, pt.y);
  
    vehicles.push(vehicle);
    
  }
 
 
}
function draw() {
  background(bi);


image(f,width/2-190,450,190,190)
 fill(0)
 textFont("Harlow Solid Italic")
 //strokeWeight(1)
 noStroke(0)
 textSize(35)
  text("Dad,you know I like batman and ",width/2-10,500)
  text("supermans cool too.But I dont need ",width/2-10,550)
  text("them as long as I have you ",width/2-10,600)
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
     
    v.behaviors();
    v.update();
    v.show();
   //stroke(255);
    

 }
}
  
