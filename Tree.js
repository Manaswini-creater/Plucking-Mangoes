class Tree {
    constructor(x,y,r){
        var options ={
         restitution :0.8,
        isStatic:true,
        friction :0.5,
        density:1.2
        }
        this.r=r
        this.x= x
        this.y=y
        this.image=loadImage("Plucking mangoes/tree.png")
        this.body =  Bodies.circle(this.x,this.y,this.r,options)
        this.r = r
       
        World.add(world,this.body)
        }
        display(){
            push()
            translate(this.body.position.x,this.body.position.y)
            rotate (this.body.angle)
        imageMode(CENTER)
        image(this.image ,0,0,this.r*2,this.r*2)
        pop()
            
        }
}