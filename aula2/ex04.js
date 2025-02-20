const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu nome: ", (nome) => {
  rl.question("Digite seu sexo (M/F): ", (sexo) => {
    rl.question("Digite o valor das compras (R$): ", (valor) => {
      let valorCompra = parseFloat(valor);
      let desconto = sexo.toUpperCase() === "F" ? 0.13 : 0.05;
      let precoFinal = valorCompra * (1 - desconto);

      if (isNaN(valorCompra) || valorCompra < 0) {
        console.log("Por favor, insira um valor válido para a compra.");
      } else {
        console.log(
          `Olá, ${nome}! Seu desconto foi de ${(desconto * 100).toFixed(0)}%.`
        );
        console.log(
          `O valor final das suas compras é R$${precoFinal.toFixed(2)}.`
        );
      }

      rl.close();
    });
  });
});
