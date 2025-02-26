/*Exercício 2 7DaysOfCode - JavaScript*/

let nome;
let idade;
let LP;

nome = prompt("Qual seu nome?");
idade = prompt("Qual sua idade?");
LP = prompt("Qual sua linguagem de programação favorita?");

alert(
  "Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + LP
);

let gosta = prompt("Você gosta de estudar " + LP + "? Responda com sim ou nao");

if (gosta === "sim") {
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else {
  alert("Ahh que pena! Estude mais!");
}
