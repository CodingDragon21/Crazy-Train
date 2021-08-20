class Connect{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            pointA :{x:0,y:0},
            bodyB:bodyB,
            pointB :{x:0,y:0},
            length: 150,
            stiffness:0.00
            }
            this.con = Constraint.create(options);
            World.add(world,this.con);
    }
    
    display(){
        var posA = this.con.bodyA.position;
        var posB = this.con.bodyB.position;
        strokeWeight(5);
        line(posA.x, posA.y,posB.x,posB.y);
    }

}