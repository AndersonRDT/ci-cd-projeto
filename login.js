function login(email, senha) {
  if (email === "eduardo.lino@pucr.br" && senha === "123456") {
    return "sucesso";
  }
  return "erro";
}

module.exports = login;