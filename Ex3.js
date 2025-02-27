/*Exercício 3 7DaysOfCode - JavaScript*/

//Escolher área
function escolherArea() {
  let area = "";
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

  while (!regex.test(area.trim())) {
    area = prompt("Você prefere front-end ou back-end? (front-end/back-end)");

    if (!regex.test(nome.trim())) {
      alert("Esolha uma das duas opções");
    }
    return area.toLowerCase().trim(); // Normaliza a resposta para evitar erros
  }
}

//Escolher linguagem
function escolherLinguagem() {
  let linguagem = "";
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
  if (area === "front-end") {
    while (!regex.test(linguagem.trim())) {
      linguagem = prompt("Você prefere aprender React ou Vue?");
    }
    return linguagem.toLowerCase().trim(); // Normaliza a resposta para evitar erros
  }
  if (area === "back-end") {
    while (!regex.test(linguagem.trim())) {
      linguagem = prompt(" Vocé prefere aprender C# ou Java?");
    }
    return linguagem.toLowerCase().trim(); // Normaliza a resposta para evitar erros
  }
}
