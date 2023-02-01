//imagens e sons do jogo

//variáveis imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//variáveis sons
let somDaTrilha;
let SomDaColisao; 
let somDoPonto;

//carregamento pré visualização imagens e sons.
function preload(){
  //imagens
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  
  //sons
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");

  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3,imagemCarro2 ,imagemCarro3, imagemCarro];

}