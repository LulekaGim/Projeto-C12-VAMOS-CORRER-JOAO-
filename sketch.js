var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)

   pathImg = loadImage ("path.png");

  //loadAnimation (carregarAnimação) de corrida para o menino
   boyImg = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.png", "jake5.png");
}

function setup(){
  
  createCanvas(400,400);

 //crie um sprite para a pista 
 path = createSprite(100,100,390,100)
 path.x = path.width /2;

//adicione uma imagem para a pista
path.addAnimation("pista", pathImg);

path.scale=0.8;

//crie um sprite de menino
boy = createSprite (200,300,100,100)

//adicione uma animação de corrida para ele
boy.scale=0.4;
boy.addAnimation("running", boyImg);
  
//crie um limite à esquerda
leftBoundary=createSprite(30,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible = false

//crie um limite à direita
rightBoundary=createSprite(365,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x=World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  
  //Faça com que a pista seja um fundo que se move dando a ela velocity Y.
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
