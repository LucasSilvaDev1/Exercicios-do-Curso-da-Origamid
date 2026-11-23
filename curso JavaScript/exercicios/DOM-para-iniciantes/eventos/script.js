// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll("a[href^='#'");

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault()
    links.forEach((classLink) => {
      classLink.classList.remove('ativo')
    })
    link.classList.add('ativo')
})
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todoBody = document.querySelectorAll('body *')
function Elemento(event) {
  console.log(event.currentTarget)
}
todoBody.forEach((elemento) => {
  elemento.addEventListener('click', Elemento)
})
  // event.target.remove())
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function letraT(event) {
  if (event.key === 't') {
    document.body.style.fontSize = '40px'
  }
}
addEventListener('keydown', letraT)