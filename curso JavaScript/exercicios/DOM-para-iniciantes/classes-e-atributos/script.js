// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll(".menu a");
let i = 0;
menu.forEach((item) => {
  item.classList.add("ativo");
});
console.log(menu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
  item.classList.remove("ativo");
});
menu[0].classList.add("ativo");
console.log(menu);

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(img, possuiAtributo);
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector(".menu li:last-of-type a");
console.log(linkExterno);
console.log(linkExterno.getAttribute("href"));
linkExterno.setAttribute("href", "cachorro");
console.log(linkExterno.getAttribute("href"));
