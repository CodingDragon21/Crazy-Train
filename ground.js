class Ground{
    constructor(x,y,w,h){
  
        var options = {  
            isStatic: true,
  
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.w =w 
        this.h = h
        World.add(world,this.body)
    }
    show(){
    var pos = this.body.position
    var angle = this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(RADIUS)
    fill("blue")
    rect(0,0,this.w,this.h)
    pop()
    }
  }