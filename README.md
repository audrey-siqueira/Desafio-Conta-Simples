# Desafio-Conta-Simples

O Desafio consistiu em elaborar um online banking tentando seguir as ferramentas e tarefas listadas como pré requisitos.


1- O Desafio escolhido foi o Front-End, sendo necesário o conhecimento de algumas atividades que não eram de minha rotina, precisando de um auto-aprendizado principalmente em Node js e no React, alguns onceitos em JSON e também um maior entendimento da parte de como levantar um servidor e fazer a renderização da forma como foi pedida as tarefas pelo desafio.

2- Desenvolvendo o Front-End tinha dúvidas de como fazer a autenticação e me interessei em tentar criar uma API para basear meu portal de Login/Registro e dar acesso aos usuários do banco, como o desafio apenas pediu para a integração com o Banco de dados ser "mockada", acredito que isso foi uma tarefa que fiz a mais do combinado.

Passo a passo para rodar o programa:

Tarefa 1 :
- Abrir o arquivo rar de API e iniciar-lo através do terminal com o comando  "node src/main.js"
- Confirmar no terminal que o servidor foi criado.

<p align="center">
  <img src="figura1.png" >
</p>

Tarefa 2:
- Abrir os aquivos da pasta  my-app/src no react, logo em seguida iniciar-lo através do terminal com o comando "npm start"
<p align="center">
  <img src="figura2.png" >
</p>

- Primeiramente registrar um usuário qualquer na página de registro, http://localhost:3000/register  . São 4 campos , o primeiro Nome, o segundo sobrenome, o terceiro email, o quarto senha.

<p align="center">
  <img src="figura3.png" >
</p>


- Logo em seguida ir para a página de Login  http://localhost:3000/login e entrar com os dados préviamente cadastrados de email e senha respectivamente para fazer a autenticação.

<p align="center">
  <img src="figura4.png" >
</p>

- Feito o login com sucesso, a página renderizada pelo arquivo transferencias.js vai abrir com todos os dados da empresa e seu histórico de transferências . As figuras abaixo representam respectivamente a empresa 1 , 2 e 3. Para o usuário 3 apenas foram fornecidos pelo desafio os dados porém o histórico de compras da empresa 3 foi fornecido em branco.

<p align="center">
  <img src="figura5.png" >
</p>


<p align="center">
  <img src="figura6.png" >
</p>

<p align="center">
  <img src="figura77.png" >
</p>


3- A organização do código foi feita de modo a tentar deixa-lo o mais conciso possível, principalmente o que se reenderiza na tela foi distribuido em apenas 3 arquivos js, 1 para Login, 1 para Registro e o principal com todas as tarefas pedidas pelo desafio que se encontram no arquivo transferencias.js

4- Para rodar o que foi criado, todos os documentos necessário estão dentro da pasta "my-app/src" e além disso foi feito o upload do arquivo rar. da API de backend criada para levantar o servidor. Então basicamente os passos para rodar são primeiramente abrir o arquivo de API e a partir do terminal levantar o servidor com o comando "node src/main.js", logo em seguida abrir o arquivo de Front-End no React e inicar-lo através do comando "npm start", o que vai renderizar na página do servidor a tela de login para fazer a autenticação , feita a autenticação com sucesso , a página com os dados do cliente e o histórico de transferências será aberto.

5- Das tarefas pedidas no desafio faltaram principalmente 2 , a primeira e mais importante é que não obtive sucesso para filtrar automaticamente a renderização personalizada por usuário depois de feita a autenticação, ou seja , todo usuário autenticado com sucesso está podendo ter acesso aos dados bancários de todos usuários, o que claramente seria um grande problema de segurança, apenas para apresentar eu consegui filtrar de maneira manual , trocando a variavel "N" no arquivo transferencias.js para os valores 1 , 2 ou 3, assim podendo representar a filtragem por usuário. A segunda tarefa faltando é que não tive tempo para implementar a parte de gráfico de entrada e saída do cliente.

6- O código apesar de legível tem muitos arquivos como parte integrante, o que necessita de um conhecimento prévio principalmente em Javascript e Node para entender todo o contexto.

7- A vulnerabilidade clara está no fato comentado anteriormente, que um cliente autenticado está podendo ver as informações globais do arquivo JSON, porque não foi filtrado de maneira personalizava como deveria ser.

8- Uma cobertura completa de teste não foi feita, apenas o cadastramento de 3 clientes, para representarem 1 cada empresa com o historico de transações fornecidos pelo desafio.

9- Não disponibilizei o histórico de commits

10- A partir do momento que o cliente faz a autenticação, tentei deixar todas as tarefas pedidas renderizadas na mesma página justamente para facilitar a experiência do usuário.
Tudo que foi pedido é encontrado facilmente através de uma tabela com filtros por todos os tópicos.

Foi concluído que o programa obteve sucesso em realizar quase todos requisitos de forma clara e concisa mas ainda não se encontra pronto para rodar em produção, faltando passar por testes, eliminar as vulnerabilidades e terminar 100% as tarefas exigidas.
