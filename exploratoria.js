
let usuario = {
  nome: "Carlos Silva",
  idade: 22,
  email: "carlos@email.com",
  ativo: true
};

console.log("Nome: ", usuario.nome);
console.log("Email: ", usuario.email);

if (usuario.idade >= 18) {
  console.log("Usuário é maior de idade.");
} else {
  console.log("Usuário é menor de idade.");
}