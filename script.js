//Aguardar o DOM estar pronto
$(document).ready(function(){
  $('#loginAluno').submit(function(event){
      //atribuindo nas variaveis os valores inseridos nos campos usuario e senha
    var usuario = $('#inputUsuario').val()
    var senha = $('#inputSenha').val()
    //testar se usuario e senha estao corretos
    if(usuario === "root" && senha === "1234"){
      //adicionando classes do bootstrap a div com ID mensagem
      $('#mensagem').addClass('alert alert-success alert-dismissible fade show')
      //remove class alert-warning caso ela exista
      $('#mensagem').removeClass('alert-warning')
      //Atribuindo um texto para a div
      $('#mensagem').text('Usuario logado!!!!').show().fadeOut(3000)
    }else{
      $('#mensagem').addClass('alert alert-warning alert-dismissible fade show')
      $('#mensagem').removeClass('alert-success')
      $('#mensagem').text('Usuario ou senha invalida!!').show().fadeOut(3000)
      event.preventDefault() //Bloquear o evento de submit
    }
  })
})