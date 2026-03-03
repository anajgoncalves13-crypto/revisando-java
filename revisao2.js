
let produtos = ["Arroz", "Açúcar", "Feijão", "Macarrão", "Amendoim"];

console.log("Lista completa:");
for (let i = 0; i < produtos.length; i++) {
  console.log(produtos[i]);
}

console.log("Produtos que começam com a letra A:");
for (let i = 0; i < produtos.length; i++) {
  if (produtos[i][0] === "A") {
    console.log(produtos[i]);
  }
}