const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a distância a percorrer (em km): ", (distancia) => {
  distancia = parseFloat(distancia);

  let preco;
  if (distancia <= 200) {
    preco = distancia * 0.5;
  } else {
    preco = distancia * 0.45;
  }

  console.log(`Valor a pagar: R$ ${preco.toFixed(2)}`);

  rl.close();
});
