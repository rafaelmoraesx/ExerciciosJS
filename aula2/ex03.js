const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const anoAtual = 2025; // Usando a data atual fornecida (20/02/2025)

rl.question("Digite o ano de nascimento: ", (anoNascimento) => {
  anoNascimento = parseInt(anoNascimento);
  const idade = anoAtual - anoNascimento;

  if (idade < 18) {
    const anosFaltam = 18 - idade;
    console.log(
      `Você ainda não atingiu 18 anos. Faltam ${anosFaltam} anos para o alistamento.`
    );
  } else if (idade === 18) {
    console.log("Você deve se alistar este ano!");
  } else {
    const anosPassaram = idade - 18;
    console.log(
      `Você já passou da idade de alistamento há ${anosPassaram} anos.`
    );
  }

  rl.close();
});
