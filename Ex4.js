/* Exercício 4 7DaysOfCode - JavaScript 

Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!

Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

*/

function chutarNumero() {
  const numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Gera um número aleatório entre 1 e 10
  let tentativas = 3;

  while (tentativas > 0) {
    const chute = Number(prompt("Tente adivinhar o número (entre 1 e 10):"));

    if (chute === numeroAleatorio) {
      alert("Parabéns! Vocês acertou!");
      break;
    } else {
      alert("Tente novamente. Vocês ainda tem " + tentativas + " tentativas.");
      tentativas--;
    }
  }

  if (tentativas === 0) {
    alert("Suas tentativas acabaram. O número era: " + numeroAleatorio);
  }
}

chutarNumero();
