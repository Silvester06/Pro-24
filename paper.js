class Paper{
    constructor(x,y){
        var options = {
            restitution:0.8
        }
        this.body = Bodies.circle(x,y,30,options)
        this.image = loadImage('paper.png')
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        this.image(this.body.position.x,this.body.position.y,30,30)

    }
}