// Verifique se a sua idade é maior do que a de algum parente
let lucas = 21;
let luan = 16;

if (lucas > luan) {
  console.log("minha idade é maior");
} else if (lucas == luan) {
  console.log("mesma idade");
} else {
  console.log("minha idade e menor");
}

// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
console.log(!!nome);
var idade = 28;
console.log(!!idade);
var possuiDoutorado = false;
console.log(!!possuiDoutorado);
var empregoFuturo;
console.log(!!empregoFuturo)
var dinheiroNaConta = 0;
console.log(!!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil < china) {
  console.log("brasil tem menos habitantes");
} else {
  console.log("China tem menos Habitantes");
}
// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
