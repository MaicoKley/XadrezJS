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



// Renderiza tudo
var render = function render() {
  if (boardReady) {
    ctx.drawImage(boardImage, 0, 0);
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
