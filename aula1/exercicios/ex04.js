const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// capturando os dois números inteiros
rl.question("Digite o primeiro número: ", (numero1) => {
  rl.question("Digite o segundo número: ", (numero2) => {
    let soma = parseInt(numero1) + parseInt(numero2);
    console.log("A soma dos dois números é: " + soma);

    rl.close(); // fecha a interface após a captura dos dados
  });
});
