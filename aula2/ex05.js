const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a distância da viagem em Km: ", (distancia) => {
  let distanciaNum = parseFloat(distancia);
  let precoPorKm = distanciaNum <= 200 ? 0.5 : 0.45;
  let precoFinal = distanciaNum * precoPorKm;

  if (isNaN(distanciaNum) || distanciaNum < 0) {
    console.log("Por favor, insira uma distância válida.");
  } else {
    console.log(
      `O preço da passagem para ${distanciaNum}Km é R$${precoFinal.toFixed(2)}.`
    );
  }

  rl.close();
});
