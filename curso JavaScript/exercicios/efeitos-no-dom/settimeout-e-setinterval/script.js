// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// function mudarClasse() {
//     document.body.classList.toggle('active')
// }

// setInterval(mudarClasse, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const play = document.querySelector('[data-btn="iniciar"]');
let pause = document.querySelector('[data-btn="pausar"]');
let display = document.querySelector(".display");

let i = 0;
play.addEventListener("click", () => {
  const cronometro = setInterval(() => {
    i++;
    display.innerText = i;
    play.setAttribute("disabled", "");
  }, 100);

  pause.addEventListener("click", () => {
    clearInterval(cronometro);
    play.removeAttribute("disabled", "");
  });

  pause.addEventListener("dblclick", () => {
    display.innerText = 0;
    i = 0;
  });
});
