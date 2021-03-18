class Drop{
    constructor(x,y,diameter){
      var  options = {
       'friction' : 1.0
}
        this.diameter = diameter;
        this.body = Bodies.circle(x,y,diameter,options);
        World.add(world,this.body);
}
 raindrop(){
    if(this.body.position.y > 600){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
    }
    }
    display(){ 
        var pos = this.body.position
        push(); 
        translate(this.body.position.x, this.body.position.y); 
        ellipseMode(CENTER); 
        fill("brown");
        ellipse(0,0,this.diameter,this.diameter);
        pop(); 
        }
    
}