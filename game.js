'use strict';

//Jogo de Xadrez en JS

// Cria o canvas
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Controla o loop do jogo
var main = function main() {
 
};

// Suporte cross-browser para requestAnimationFrame
var w = window;
var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Que comece o jogo!
var then = Date.now();
reset();
main();
