class paper {
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/paper.png")
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius);
        pop();
}
}