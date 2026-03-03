function validarsenha(senha) {
    if(senha.length > 8){
        return "senha valida"
    }
    else{
        "senha muito curta"
    }
}
console.log(validarSenha("123456789"))