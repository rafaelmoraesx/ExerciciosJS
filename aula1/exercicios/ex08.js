const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a largura da parede em metros: ", (largura) => {
  rl.question("Digite a altura da parede em metros: ", (altura) => {
    let area = parseFloat(largura) * parseFloat(altura);
    let tintaNecessaria = area / 2; // 1 litro de tinta cobre 2 metros quadrados
    console.log(`A área da parede é: ${area} metros quadrados.`);
    console.log(`Quantidade de tinta necessária: ${tintaNecessaria} litros.`);

    rl.close();
  });
});
