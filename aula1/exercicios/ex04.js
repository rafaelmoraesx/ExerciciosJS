const readline = require("readline"); 


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Digite o primeiro número: ", (numero1) => {
  rl.question("Digite o segundo número: ", (numero2) => {
    let soma = parseInt(numero1) + parseInt(numero2);
    console.log("A soma dos dois números é: " + soma);

    rl.close(); 
  });
});
