const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número inteiro: ", (numero) => {
  let antecessor = parseInt(numero) - 1;
  let sucessor = parseInt(numero) + 1;
  console.log(
    `O antecessor de ${numero} é ${antecessor} e o sucessor é ${sucessor}`
  );

  rl.close();
});
