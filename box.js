class Box
{
    constructor(x,y)
    {
        var options={
            'friction' : 1,
            'density' : 0.07,
            'restitution' : 0.5
        }

        this.body = Bodies.rectangle(x,y,40,40,options);
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        fill("red");
        rect(0,0,40,40);
        pop();
    }
}