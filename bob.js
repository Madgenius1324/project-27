class bob {
    constructor(x, y, radius) {
        var options = {
            
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.radius=radius;
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
       ellipse( 0, 0, 50,50);
        pop();
      }
}