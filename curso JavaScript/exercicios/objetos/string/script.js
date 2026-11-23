// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];
let taxaTotal = 0;
let Recebimento = 0;
const valores = transacoes.forEach((taxa) => {
  const soma = taxa.valor.slice(3);
  if (taxa.descricao.startsWith("Taxa")) {
    taxaTotal += Number(soma);
    // console.log(taxaTotal)
  } else if (taxa.descricao.startsWith("Rece")) {
    Recebimento += Number(soma);
    // console.log(Recebimento)
  }
});

console.log("Taxa total " + taxaTotal);
console.log("Total recebido " + Recebimento);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const listaTransp = transportes.split(";");
console.log(listaTransp);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
 html = html.split("span").join('a');
console.log(html);
// Retorne o último caracter da frase
const frase = "Melhor do ano!";
const frase2 = frase.slice(frase.length - 1);
console.log(frase2);
// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];
let totalTaxas = 0;
transacoes2.forEach((item) => {
  item = item.trim().toLowerCase();
  // console.log(item);
  if (item.startsWith("taxa")) {
    totalTaxas ++;
  }
});

console.log(totalTaxas);
