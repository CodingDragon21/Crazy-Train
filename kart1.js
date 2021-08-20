class Kart1{
    constructor(x,y,w,h){
  
        this.kart1Img = loadImage("kart1.svg")
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
    image(this.kart1Img,0,0,this.w,this.h)
    pop()
    }
  }