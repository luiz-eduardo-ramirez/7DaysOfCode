/* Exercício 3 7DaysOfCode - JavaScript 

Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.


*/

// Escolher área
function escolherArea() {
  let area = "";
  const opcoesValidas = ["front-end", "back-end"]; // Lista com as opções aceitas

  while (true) {
    area = prompt("Você prefere front-end ou back-end? (front-end/back-end)");

    if (area) {
      area = area.toLowerCase().trim(); // Normaliza a entrada
      if (opcoesValidas.includes(area)) {
        return area; // Sai do loop e retorna a escolha válida
      }
    }
    alert("Escolha uma opção válida: front-end ou back-end.");
  }
}

// Escolher linguagem
function escolherLinguagem(area) {
  let linguagem = "";
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

  if (area === "front-end") {
    do {
      linguagem = prompt("Você prefere aprender React ou Vue?");
    } while (!linguagem || !regex.test(linguagem.trim()));
  } else if (area === "back-end") {
    do {
      linguagem = prompt("Você prefere aprender C# ou Java?");
    } while (!linguagem || !regex.test(linguagem.trim()));
  }
  return linguagem.toLowerCase().trim();
}

// Escolher especialização
function escolherEspecializacao() {
  let especializacao = "";
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

  do {
    especializacao = prompt(
      "Gostaria de se especializar em uma das duas áreas ou em FullStack?"
    );
  } while (!especializacao || !regex.test(especializacao.trim()));

  return especializacao.toLowerCase().trim();
}

// Lista ligada de tecnologias
function especialidadesTecnologia() {
  let opcoeLinguagem = true;
  while (opcoeLinguagem) {
    let linguagemProgramacao = prompt(
      "Quais outras linguagens você gostaria de aprender para se especializar? "
    );
    alert("Você optou em se especializar em " + linguagemProgramacao + ".");

    opcoeLinguagem =
      prompt(
        "Gostaria de Escolher mais alguma? Digite S para sim e N para sair do jogo."
      ) === S;
  }
}

escolherArea();
escolherLinguagem();
escolherEspecializacao();
especialidadesTecnologia();
