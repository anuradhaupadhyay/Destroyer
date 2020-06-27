class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  displayBox(){
    var posBox =this.body.position;
    var angleBox = this.body.angle;
    push();
    translate(posBox.x, posBox.y);
    rotate(angleBox);
    rectMode(CENTER);
    fill("white");
    stroke("brown");
    strokeWeight(5);
    rect(0, 0, this.width, this.height);
    pop();
  }
}