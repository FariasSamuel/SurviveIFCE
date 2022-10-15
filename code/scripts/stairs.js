export class Stairs{
    constructor(x, y, width, height){
        this.x = x; 
        this.y = y;
        this.width = width;
        this.height = height;
       
    }

    update(speed){
        this.x -= speed;
    }

    draw(context){
        context.save();
        context.fillStyle = "#FF0000";
        context.fillRect(this.x, this.y, this.width, this.height);
        context.restore();
    }

}