const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
const FirstValue = comidas.slice(0, 1);
// Remova o último valor de comidas e coloque em uma variável
const LastValue = comidas.slice(comidas.length - 1);
// Adicione 'Arroz' ao final da array
comidas.push("Arroz");
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("Peixe", "Batata");

console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
// Inverta a ordem dos estudantes
estudantes.reverse();
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes("Joana"));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes("Juliana"));
console.log(estudantes);

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
 html = html.split("section");
 html = html.join("ul");
 html = html.split("div");
 html = html.join("li");
 
  console.log(html);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const backupCarro = carros.slice()
 carros.pop()
 console.log(backupCarro,carros)
