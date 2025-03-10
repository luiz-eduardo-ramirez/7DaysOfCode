/* Exercício 6 7DaysOfCode - JavaScript

Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?

A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

Por fim, ele voltará para o ciclo inicial de perguntas.

Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

Por exemplo: “Não foi possível encontrar o item dentro da lista!”

Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.

*/

let listaDeCompras = {};
let categorias = ["frutas", "laticinios", "congelados", "doces", "outros"];

while (true) {
  let adicionar = prompt(
    "Deseja adicionar um item à sua lista de compras? (sim/não)"
  ).toLowerCase();
  if (adicionar === "não") {
    let remover = prompt(
      "Gostaria de remover um item da sua lista de compras? (sim/não)"
    );
    if (remover === "sim") {
      removerItem();
    }
  }
  if (adicionar !== "sim") break;

  let comida = prompt("Qual comida deseja adicionar?");
  let categoria = prompt(
    "Qual categoria essa comida se encaixa? (frutas, laticinios, congelados, doces, outros)"
  ).toLowerCase();

  if (!categorias.includes(categoria)) {
    alert("Categoria inválida! Será adicionada na categoria 'outros'.");
    categoria = "outros";
  }

  if (!listaDeCompras[categoria]) {
    listaDeCompras[categoria] = [];
  }
  listaDeCompras[categoria].push(comida);
}

exibirLista();

function exibirLista() {
  alert("Lista de compras:");
  for (let categoria in listaDeCompras) {
    alert(`    ${categoria}: ${listaDeCompras[categoria].join(", ")}`);
  }
}

function removerItem() {
  let comida = prompt("Qual comida deseja remover?");
  let categoria = prompt(
    "Qual categoria essa comida se encaixa? (frutas, laticinios, congelados, doces, outros)"
  ).toLowerCase();

  if (!categorias.includes(categoria)) {
    alert("Categoria inválida! Será adicionada na categoria 'outros'.");
    categoria = "outros";
  }
}
