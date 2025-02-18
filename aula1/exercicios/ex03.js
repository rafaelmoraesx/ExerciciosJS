const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe seu nome e captura o dado
rl.question("Escreva seu nome: ", (nome) => {
  // pedindo o salário do funcionário
  rl.question("Informe o seu salário: R$", (salario) => {
    // Exibe a mensagem com o nome e salário
    console.log(
      `O funcionário ${nome} recebe R$${parseFloat(salario)
        .toFixed(2)
        .replace(".", ",")} por mês.`
    );

    rl.close(); // fecha a interface após a captura do dado
  });
});
