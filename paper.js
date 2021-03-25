class Paper{
    constructor(x, y, radius) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.3,
          'density':1.2,
          'drag':5.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      fill("blue");
      ellipse(0, 0, this.radius);
      pop();
    }
  };
  