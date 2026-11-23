// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const Paragrafos = document.querySelectorAll("p");
console.log(Paragrafos)
const TotalCarac = Array.from(Paragrafos).reduce((acumulador, atual) => {
  return acumulador + atual.innerText.length
},0);
console.log(TotalCarac)
// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag)
  classe ? elemento.classList.add(classe) : null
  classe ? elemento.innerText = conteudo : null
  return elemento
}
console.log(criarElemento('h1', 'titulo', 'bob'))


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const newFunction = criarElemento.bind(null,'h1', 'titulo')
console.log(newFunction('eaicara'))