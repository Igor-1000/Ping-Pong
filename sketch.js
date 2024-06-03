let xBolinha = 300;
let yBolinha = 200
let diametro = 22;
let raio = diametro / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let xRaquete = 5;
let yRaquete = 150;
let RaqueteComprimento = 10;
let RaqueteAltura = 90;
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente = 5; // Definindo uma velocidade para o oponente

let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificacaoColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaquete, yRaquete, RaqueteComprimento, RaqueteAltura);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente, RaqueteComprimento, RaqueteAltura);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificacaoColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete() {
  rect(xRaquete, yRaquete, RaqueteComprimento, RaqueteAltura);
  rect(xRaqueteOponente, yRaqueteOponente, RaqueteComprimento, RaqueteAltura);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW) && yRaquete > 0) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW) && yRaquete + RaqueteAltura < height) {
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente() {
  if (yRaqueteOponente + RaqueteAltura / 2 < yBolinha - raio) {
    yRaqueteOponente += velocidadeYOponente;
  } else if (yRaqueteOponente + RaqueteAltura / 2 > yBolinha + raio) {
    yRaqueteOponente -= velocidadeYOponente;
  }
}
function incluiPlacar(){
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26);
}

function marcaPonto() {
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
  }
}

function verificaColisaoRaquete(x, y, raqueteWidth, raqueteHeight) {
  let colidiu = false;
  
  if (xBolinha + raio >= x && xBolinha - raio <= x + raqueteWidth) {
    if (yBolinha >= y && yBolinha <= y + raqueteHeight) {
      colidiu = true;
    }
  }
  
  if (colidiu) {
    velocidadeXBolinha *= -1;
  }
}
