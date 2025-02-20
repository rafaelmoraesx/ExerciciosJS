const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Desafio: Verifique se três segmentos formam um triângulo");
rl.question("Digite o comprimento do primeiro segmento: ", (lado1) => {
  rl.question("Digite o comprimento do segundo segmento: ", (lado2) => {
    rl.question("Digite o comprimento do terceiro segmento: ", (lado3) => {
      lado1 = parseFloat(lado1);
      lado2 = parseFloat(lado2);
      lado3 = parseFloat(lado3);

      if (
        lado1 + lado2 > lado3 &&
        lado2 + lado3 > lado1 &&
        lado1 + lado3 > lado2
      ) {
        console.log("Os segmentos podem formar um triângulo!");
      } else {
        console.log("Os segmentos NÃO podem formar um triângulo.");
      }

      rl.close();
    });
  });
});
