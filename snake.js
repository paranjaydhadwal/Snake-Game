class Snake {
    constructor(){
        this.x=0;
        this.y=0;
        this.xDir=20;
        this.yDir=0;
        this.snakeXPosition=[];
        this.snakeYPosition=[];
        this.tailCount=1;
    }
    update(){
        this.x=this.x+this.xDir;
        this.y=this.y+this.yDir;
       
        if(this.snakeXPosition.length>=this.tailCount){
            this.snakeXPosition.shift();
            this.snakeYPosition.shift();
        }
        this.snakeXPosition.push(this.x);
        this.snakeYPosition.push(this.y);
        
    }
    display(){
      
        for(var i=0;i<this.tailCount;i++){
            rect(this.snakeXPosition[i],this.snakeYPosition[i],20,20);
        }
    }
    eat(x,y){
        if(this.x===x&&this.y===y){
            this.tailCount=this.tailCount+1;
            return true;
            console.log(this.tailCount); 
         
        

        }
        else{
            return false;
        }
    }
    gameOver(){
        if(this.x>400||this.x<0||this.y>400||this.y<0){
          return true;
            
        }
        else{
           return false;
    }
}
}