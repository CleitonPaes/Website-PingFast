<?php
  //Variáveis
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $assunto = $_POST['assunto'];
  $mensagem = $_POST['mensagem'];
  $data_envio = date('d/m/Y');
  $hora_envio = date('H:i:s');

  //Corpo
  $arquivo = "
    <html>
      <p><b>Nome: </b>$nome</p>
      <p><b>E-mail: </b>$email</p>
      <p><b>Mensagem: </b>$mensagem</p>
      <p>Este e-mail foi enviado através do site em <b>$data_envio</b> às <b>$hora_envio</b></p>
    </html>
  ";

  $destino = "suporte@pingfast.com.br";

  //Correção caracter
  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=utf-8\n";
  $headers .= "From: $nome <$email>";

  //Enviar
  mail($destino, $assunto, $arquivo, $headers);
  
  echo "<meta http-equiv='refresh' content='0;URL=https://pingfast.com.br'>";
?>