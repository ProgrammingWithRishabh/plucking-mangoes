class Mango
{

     constructor(x, y) {
         var options = {
             'restitution':0.8,
              'friction':1.0,
              'density':1.0
            }
           this.body = Bodies.rectangle(x, y, 10, 10, options);
        this.image = loadImage("Plucking mangoes/mango.png);
            World.add(world, this.body);
       }
        display(){
          var angle = this.body.angle;
         push();
        translate(this.body.position.x, this.body.position.y);
          imageMode(CENTER);
           image(this.image, 0, 0, this.width, this.height);
          pop();
          }
}