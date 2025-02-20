const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const anoAtual = new Date().getFullYear();

rl.question("Digite seu ano de nascimento: ", (anoNascimento) => {
  let nascimento = parseInt(anoNascimento);

  if (isNaN(nascimento) || nascimento < 1900 || nascimento > anoAtual) {
    console.log("Por favor, insira um ano de nascimento válido.");
  } else {
    let idade = anoAtual - nascimento;
    let diferenca = idade - 18;

    if (idade < 18) {
      console.log(
        `Você tem ${idade} anos. Ainda faltam ${Math.abs(
          diferenca
        )} anos para o alistamento.`
      );
    } else if (idade === 18) {
      console.log("Você tem 18 anos. É hora de se alistar!");
    } else {
      console.log(
        `Você tem ${idade} anos. Já passaram ${diferenca} anos do seu alistamento.`
      );
    }
  }

  rl.close();
});
