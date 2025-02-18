const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o salário atual do funcionário: ", (salarioAtual) => {
  let aumento = 0.15;
  let novoSalario =
    parseFloat(salarioAtual) + parseFloat(salarioAtual) * aumento;
  console.log(
    `O novo salário com 15% de aumento é: R$${novoSalario.toFixed(2)}`
  );

  rl.close();
});
