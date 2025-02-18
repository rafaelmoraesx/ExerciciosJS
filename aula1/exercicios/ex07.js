const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o valor em reais (R$): ", (reais) => {
  let dolar = 5.6;
  let quantidadeDolares = parseFloat(reais) / dolar;
  console.log(
    `Com R$${reais} você pode comprar US$${quantidadeDolares.toFixed(2)}`
  );

  rl.close();
});
