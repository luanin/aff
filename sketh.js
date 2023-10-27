// we have these pieces
// that touch, but not completely
// and nowhere neatly


let p
let bg
let r = 30;

function preload() {
  p= []
  for(let i = 1;i<7;i++){
    p[i-1]= loadImage("https://assets.codepen.io/4559259/p"+ i+".png");
  }
  bg = loadImage("https://assets.codepen.io/4559259/p-back.jpg");
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES)
  noStroke()
   background(0)
  imageMode(CENTER)
}

function draw() {
  t = frameCount/100 ;
  // background(0)
   translate(width/2,height/2);
  // image(bg,0,0,600,600)
  for(let i = 0;i<6;i++){
    push()
    ease1 = pow(sin(t+i%2*t),2)
    ease2 = pow(cos(t+i%2*t),2)
    rotate(360*sin(t))
    x = i*40*ease1 - 30*sin((i+1)*t)
    y = i*30*ease1*ease2
    translate(x,y)
    image(p[i],0,0,600,600)
  }
  pop()
}
