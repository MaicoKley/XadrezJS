'use strict';

//Jogo de Xadrez en JS

// Cria o canvas
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 1152;
canvas.height = 1152;
document.body.appendChild(canvas);

// Imagem de fundo
var boardReady = false;
var boardImage = new Image();
boardImage.onload = function () {
  boardReady = true;
};
boardImage.src = 'images/board.png';


// Peões
var pawnBlack = new Image();
pawnBlack.src = 'images/Pawn-black.png';
var pawnWhite = new Image();
pawnWhite.src = 'images/Pawn-white.png';


// Renderiza tudo
var render = function render() {
  if (boardReady) {
    ctx.drawImage(boardImage, 0, 0);

    ctx.drawImage(pawnBlack, 65, 192);  
    ctx.drawImage(pawnBlack, 190, 192);
    ctx.drawImage(pawnBlack, 320, 192);     
    ctx.drawImage(pawnBlack, 445, 192);     
    ctx.drawImage(pawnBlack, 575, 192);  
    ctx.drawImage(pawnBlack, 705, 192);     
    ctx.drawImage(pawnBlack, 830, 192);     
    ctx.drawImage(pawnBlack, 960, 192);      
    
    ctx.drawImage(pawnWhite, 65, 833);  
    ctx.drawImage(pawnWhite, 190, 833);
    ctx.drawImage(pawnWhite, 320, 833);     
    ctx.drawImage(pawnWhite, 445, 833);     
    ctx.drawImage(pawnWhite, 575, 833);  
    ctx.drawImage(pawnWhite, 705, 833);     
    ctx.drawImage(pawnWhite, 830, 833);     
    ctx.drawImage(pawnWhite, 960, 833);
  }

};

// Controla o loop do jogo
var main = function main() {
 render();


  // Executa isso o mais breve possível
  requestAnimationFrame(main);
};

// Suporte cross-browser para requestAnimationFrame
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Que comece o jogo!
var then = Date.now();
main();
