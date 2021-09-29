function setup() {
  createCanvas((windowWidth * 3) / 2, windowHeight);
  angleMode(DEGREES);
  background("#2b2b2b");
}

function draw() {
  noFill();

  let myColor = lerpColor(color("#03045E"), color("#CAF0F8"), frameCount / 120);

  stroke(myColor);
  translate(0, frameCount * 3);
  rect(100, 100, 150);
  rect(550, 100, 150);
  rect(793, 100, 150);
  rect(1000, 100, 150);
  rect(1450, 100, 150);
  rect(1693, 100, 150);

  translate(frameCount * 2, -frameCount * 3);
  rect(100, 463, 150);
  rect(550, 463, 150);
  rect(1000, 100, 150);
  rect(1000, 463, 150);
  rect(1450, 100, 150);
  rect(1450, 300, 150);

  if (frameCount > 120) {
    noLoop();
  }
}
