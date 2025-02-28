/*Exercício 2 7DaysOfCode - JavaScript

Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.

EXERCÍCIO OPCIONAL

Se você quiser se aprofundar no assunto de hoje, eu tenho mais um exercício para você.

Mas ele é 100% opcional.

Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?

*/

function pegarNome() {
  let nome = "";
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

  while (!regex.test(nome.trim())) {
    nome = prompt("Qual seu nome?");

    if (!regex.test(nome.trim())) {
      alert("Digite um nome válido (somente letras).");
    }
  }

  return nome.trim(); // Remove espaços extras
}

function pegarIdade() {
  let idade = 0;

  while (isNaN(idade) || idade <= 0 || !Number.isInteger(Number(idade))) {
    idade = prompt("Qual sua idade?");

    if (isNaN(idade) || idade <= 0 || !Number.isInteger(Number(idade))) {
      alert("Você deve digitar uma idade válida (número inteiro positivo).");
    }

    idade = Number(idade); // Converte a entrada para número
  }

  return idade;
}
function pegarLP() {
  let LP = ""; // Declara a variável antes do loop
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s\+\#\.\-]+$/; // Aceita letras, números e símbolos comuns (+, #, . , -)

  while (!regex.test(LP.trim())) {
    LP = prompt("Qual sua linguagem de programação favorita?");

    if (!regex.test(LP.trim())) {
      alert("Você deve digitar uma linguagem de programação válida.");
    }
  }

  return LP.trim(); // Remove espaços extras
}

function mostrar(nome, idade, LP) {
  alert(
    "Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + LP
  );
}

function perguntar(LP) {
  let gosta = prompt(
    "Você gosta de estudar " + LP + "? Responda com sim ou nao"
  );
  return gosta.toLowerCase().trim(); // Normaliza a resposta para evitar erros
}

function resposta(gosta) {
  if (gosta === "sim") {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
  } else {
    alert("Ahh que pena! Estude mais!");
  }
}

let nome = pegarNome();
let idade = pegarIdade();
let LP = pegarLP();

mostrar(nome, idade, LP);

let gosta = perguntar(LP);
resposta(gosta);
