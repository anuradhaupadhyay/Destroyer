class Pig {
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
    displayPig(){
      var posPig =this.body.position;
      var anglePig = this.body.angle;
      push();
      translate(posPig.x, posPig.y);
      rotate(anglePig);
      rectMode(CENTER);
      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }  