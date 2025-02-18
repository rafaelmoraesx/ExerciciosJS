const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Digite o número de dias trabalhados no mês: ",
  (diasTrabalhados) => {
    let horasPorDia = 8;
    let salarioPorHora = 25;
    let salarioMensal =
      parseInt(diasTrabalhados) * horasPorDia * salarioPorHora;
    console.log(`O salário do funcionário é: R$${salarioMensal}`);

    rl.close();
  }
);
