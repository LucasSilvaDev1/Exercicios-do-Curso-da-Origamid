// Duplique o menu e adicione ele em copy

const menu = document.querySelector(".menu");
const menu2 = menu.cloneNode(true);
const copy = document.querySelector(".copy");

copy.appendChild(menu2);
// Selecione o primeiro DT da dl de Faq
const firstDT = document.querySelector(".faq-lista dt");
console.log(firstDT);
// Selecione o DD referente ao primeiro DT
const DDbeforeDT = firstDT.nextElementSibling;
console.log(DDbeforeDT);
// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML