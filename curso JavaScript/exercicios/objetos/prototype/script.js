// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
   this.Nome = nome;
  this.Sobrenome = sobrenome;
  this.Idade = idade;
}
const Lucas = new Pessoa("Lucas", "Silva", 21);
console.log(Lucas);

Pessoa.prototype.NomeCompleto = function () {
  return this.Nome + ' ' + this.Sobrenome
};

console.log(Lucas.NomeCompleto()); // retorna o objeto

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; //HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // Function

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
