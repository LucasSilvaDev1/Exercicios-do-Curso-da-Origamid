// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const Curso = document.querySelectorAll(".curso");
const ArrayCurso = Array.from(Curso);

let ArrayCompleta = ArrayCurso.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelectorAll("span")[0].innerText;
  const horas = curso.querySelectorAll("span")[1].innerText;

  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});
console.log(ArrayCompleta);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
let numerosMaiores = numeros.filter(n => n > 100)

console.log(numerosMaiores);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const Verificar = instrumentos.some((item) => {
  return item === 'Baixo'
})
console.log(Verificar)
// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];


const valorTotal = compras.reduce((acumulador,i) => {
  const precoLimpo = +i.preco.replace("R$ ", "").replace(',', '.');
  return acumulador + precoLimpo 
}, 0);
console.log(valorTotal)