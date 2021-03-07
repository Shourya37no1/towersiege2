class Box{
    constructor(x,y,width,height){
        var options={
            isStatic : false,
            restitution : 0.8
        }
    
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        if (this.body.speed < 5){
            var pos = this.body.position;
            fill("blue");
       rectMode(CENTER)
	rect(pos.x, pos.y, this.width, this.height);
        }
      else
    {
    World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
    // rectangle(this.position.x, this.position.y, this.width, this.height);
     pop();
    }  
}

    
}