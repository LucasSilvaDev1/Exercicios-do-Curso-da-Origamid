// Crie uma função para verificar se um valor é Truthy

function verificarValor1(valor1) {
  if (!!valor1) {
    return "truthy";
  } else {
    return "false";
  }
}
console.log(verificarValor1(1));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function CalcularPerimetro(L1, L2, L3, L4) {
  let CalcularPerimetro = L1 + L2 + L3 + L4;
  return CalcularPerimetro;
}
console.log(CalcularPerimetro(20, 20, 20, 20));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function NomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}

console.log(NomeCompleto("Lucas", "Silva"));

// Crie uma função que verifica se um número é par
function VerificarParImpar(valor3) {
  if (valor3 % 2 === 0) {
    return "Numero par";
  } else {
    return "Numero Impar";
  }
}
console.log(VerificarParImpar(5));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function VerificarTipo(valor2) {
  let tipoValor = typeof valor2;
  return tipoValor;
}
console.log(VerificarTipo(false));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function () {
  console.log("Lucas Silva");
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(jaVisitei(20));
console.log(precisoVisitar(20));
