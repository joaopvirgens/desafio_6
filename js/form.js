// Classe chamada "contato" usada para criar objetos de contato
class contato {
  // Método construtor: é executado automaticamente quando um novo objeto é criado
  constructor(nome, sobrenome, email, cpf, telefone, tipo) {
    // Atribui os valores recebidos aos atributos do objeto
    this.nome = nome; // Armazena o nome
    this.sobrenome = sobrenome; // Armazena o sobrenome
    this.email = email; // Armazena o email
    this.cpf = cpf; // Armazena o CPF
    this.telefone = telefone; // Armazena o telefone
    this.tipo = tipo; // Armazena o tipo de contato (ex: pessoal, trabalho, etc.)
  }
}

// Função chamada quando o formulário é enviado
function Post(form) {
  // Cria um novo objeto da classe "contato"
  // Pegando os valores digitados no formulário
  let data = new contato(
    form.nome.value, // Valor do campo "nome"
    form.sobrenome.value, // Valor do campo "sobrenome"
    form.email.value, // Valor do campo "email"
    form.cpf.value, // Valor do campo "cpf"
    form.telefone.value, // Valor do campo "telefone"
    form.contato.value, // Valor do campo "tipo de contato"
  );
 // Mostra no console do navegador o objeto criado (para testes/debug)
  console.log(data);
  // Exibe uma mensagem de sucesso para o usuário
  alert("Dados enviados com sucesso!");

 

  // Retorna false para impedir o comportamento padrão do formulário
  // Ou seja: evita que a página seja recarregada após o envio
  return false;
}
