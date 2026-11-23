// Retorne no console todas as imagens do site
const imgsSite = document.querySelectorAll("img");
console.log(imgsSite);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll("img[src^='img/imagem']");
console.log(imagens);
// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll("[href^='#']");
console.log(links);
// Selecione o primeiro h2 dentro de .animais-descricao
const firsth2 = document.querySelector(".animais-descricao h2");
console.log(firsth2);
// Selecione o último p do site
const lastP = document.querySelectorAll("p");
console.log(lastP[--lastP.length]);
