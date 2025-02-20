const readline = require("readline"); 


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Escreva seu nome: ", (nome) => {
  // pedindo o salário do funcionário
  rl.question("Informe o seu salário: R$", (salario) => {
    
    console.log(
      `O funcionário ${nome} recebe R$${parseFloat(salario)
        .toFixed(2)
        .replace(".", ",")} por mês.`
    );

    rl.close(); 
  });
});
