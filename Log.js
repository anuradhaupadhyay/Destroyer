class Log {
    constructor(x, y, width, height,angle) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0,
          'angle':angle
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //Matter.Body.setAngle(this.body,angle);

      World.add(world, this.body);
    }
    displayLog(){
      var posLog =this.body.position;
      var angleLog = this.body.angle;
      push();
      translate(posLog.x, posLog.y);
      rotate(angleLog);
      rectMode(CENTER);
      fill(255);
      stroke("green");
      strokeWeight(5);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  