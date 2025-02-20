const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o comprimento do primeiro segmento: ", (seg1) => {
  rl.question("Digite o comprimento do segundo segmento: ", (seg2) => {
    rl.question("Digite o comprimento do terceiro segmento: ", (seg3) => {
      let a = parseFloat(seg1);
      let b = parseFloat(seg2);
      let c = parseFloat(seg3);

      if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        console.log("Por favor, insira valores válidos para os segmentos.");
      } else {
        let formaTriangulo = a + b > c && a + c > b && b + c > a;
        console.log(
          `Os segmentos ${
            formaTriangulo ? "podem" : "não podem"
          } formar um triângulo.`
        );
      }

      rl.close();
    });
  });
});
