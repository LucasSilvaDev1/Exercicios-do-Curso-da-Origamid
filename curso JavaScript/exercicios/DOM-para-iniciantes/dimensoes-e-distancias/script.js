// Verifique a distância da primeira imagem
// em relação ao topo da página

const img1 = document.querySelector("img");

console.log(img1.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");
console.log(links);

const verifLinks = links.forEach((item) => {
  if (item.clientHeight <= 48 && item.clientWidth <= 48) {
    console.log("tem o minimo");
  } else {
    console.log("nao tem o minimo");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const mobile = window.matchMedia("(max-width:720px)").matches;

  if (mobile) {
    const menu = document.querySelector(".menu");
    menu.classList.add("menu-mobile");
    console.log('mobile')
  }
