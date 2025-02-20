const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a velocidade do carro (em km/h): ", (velocidade) => {
  velocidade = parseFloat(velocidade);

  if (velocidade > 80) {
    const excesso = velocidade - 80;
    const multa = excesso * 5;
    console.log(`Você foi multado! Valor da multa: R$ ${multa.toFixed(2)}`);
  } else {
    console.log("Velocidade dentro do limite. Não houve multa!");
  }

  rl.close();
});
