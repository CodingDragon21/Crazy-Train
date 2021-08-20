class Kart3{
    constructor(x,y,w,h){
  
        this.kart3Img = loadImage("kart3.svg")
        this.body = Bodies.rectangle(x,y,w,h)
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
    imageMode(CENTER)
    image(this.kart3Img,0,0,this.w,this.h)
    pop()
    }
  }