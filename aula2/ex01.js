const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const limiteVelocidade = 80;
const valorMultaPorKm = 5;

rl.question("Digite a velocidade do carro (Km/h): ", (velocidade) => {
  let velocidadeNum = parseFloat(velocidade);

  if (isNaN(velocidadeNum) || velocidadeNum < 0) {
    console.log("Por favor, insira uma velocidade válida.");
  } else if (velocidadeNum > limiteVelocidade) {
    let excesso = velocidadeNum - limiteVelocidade;
    let multa = excesso * valorMultaPorKm;
    console.log(
      `Você foi MULTADO! Excedeu o limite de ${limiteVelocidade}Km/h.`
    );
    console.log(`O valor da multa é R$${multa.toFixed(2)}.`);
  } else {
    console.log("Velocidade dentro do limite. Boa viagem!");
  }

  rl.close();
});
