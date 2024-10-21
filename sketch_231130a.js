let bearImage;
let numCodes = 100;
let codes;
let typingTextTop;
let typingTextBottom;
function preload(){
    bearImage=loadImage("beer.png");
}

function setup(){
    createCanvas(600, 800);
    codes=new Array(numCodes);
    for(let i = 0;i < numCodes;i++) {
        codes[i]=new Code(random(width), random(height), random(1, 5));
    }
    typingTextTop=new TypingText(width / 2, 50, "Kom naar het IFFR 2024!");
    typingTextBottom=new TypingText(width / 2, height - 50, "International Film Festival 2024");
}

function draw(){
    background(0);
    let bearX = (width - bearImage.width) / 2;
    let bearY = (height - bearImage.height) / 2;
    image(bearImage, bearX, bearY);
    for (let P2JSi = 0; P2JSi < codes.length; P2JSi++){
        let code = codes[P2JSi];
        code.update();
        code.display();
    }
    typingTextTop.update();
    typingTextTop.display();
    typingTextBottom.update();
    typingTextBottom.display();
}

class Code{
    constructor(x, y, speed){
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.x=x;
        this.y=y;
        this.speed=speed;
    }

    update(){
        this.y+=this.speed;
        if(this.y > height) {
            this.y=height;
            this.speed*=-1;
        }
        if(this.y < 0) {
            this.y=0;
            this.speed*=-1;
        }
    }

    display(){
        fill(0, 255, 0);
        textSize(20);
        let matrixCode = str(int(random(0, 2)));
        text(matrixCode, this.x, this.y);
    }

}

class TypingText{
    constructor(x, y, message){
        this.x = 0;
        this.y = 0;
        this.currentIndex = 0;
        this.x=x;
        this.y=y;
        this.message=message;
        this.currentIndex=0;
        this.typingComplete=false;
    }

    update(){
        if(this.currentIndex < this.message.length) {
            this.currentIndex++;
        }
    else {
            this.typingComplete=true;
        }
    }

    display(){
        fill(255);
        textSize(24);
        textAlign(CENTER);
        if(this.typingComplete) {
            text(this.message, this.x, this.y);
        }
    else {
            text(this.message.substring(0, this.currentIndex), this.x, this.y);
        }
    }

}

