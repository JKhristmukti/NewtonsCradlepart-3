class Bob {
    constructor(x,y) {
      var options ={
          restitution: 1.3
      }
      this.body = Bodies.circle(x,y,50,options);
      this.radius=50;
      World.add(world,this.body);
    };

    display() {
      var pos=this.body.position;
      ellipseMode(RADIUS);
      strokeWeight(2);
      stroke("yellow");
      fill("blue");;
      ellipse(pos.x,pos.y,this.radius);
    };
  };