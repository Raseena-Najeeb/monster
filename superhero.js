class SuperHero
{
    constructor(x,y,r)
    {
        var options={
            'frictionAir' : 1,
            'density' : 1,
        }

        this.radius = r;
        this.x = x;
        this.y = y;
        this.image = loadImage("images/Superhero-02.png");
        this.body = Bodies.circle(x,y,r/2,options);
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,360,120);
        pop();
    }
}