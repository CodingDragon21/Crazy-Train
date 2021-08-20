class Kart2{
    constructor(x,y,w,h){
  
        this.kart2Img = loadImage("kart2.svg")
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
    image(this.kart2Img,0,0,this.w,this.h)
    pop()
    }
  }