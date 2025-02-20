const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um ano: ", (ano) => {
  let anoNum = parseInt(ano);

  if (isNaN(anoNum) || anoNum < 0) {
    console.log("Por favor, insira um ano válido.");
  } else {
    let bissexto =
      (anoNum % 4 === 0 && anoNum % 100 !== 0) || anoNum % 400 === 0;
    console.log(
      `O ano ${anoNum} ${bissexto ? "é bissexto." : "não é bissexto."}`
    );
  }

  rl.close();
});
