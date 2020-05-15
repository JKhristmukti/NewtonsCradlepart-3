class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options ={
            bodyA : bodyA,
            bodyB : bodyB,
            pointB: {x:this.offsetX, y:this.offsetY},
            stiffness : 1.5,
            length : 500
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    display() {
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;

        var anchor1x=pointA.x;
        var anchor1y=pointA.y;

        var anchor2x=pointB.x+this.offsetX;
        var anchor2y=pointB.y+this.offsetY;


        strokeWeight(2);
        stroke("white");

        line(anchor1x,anchor1y,anchor2x,anchor2y);
    }
}