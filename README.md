Projeto Kenzie Hub

projeto feito usando React.js com Sass.

Primeiro instalei o vite para baixar as dependências do React

projeto com finalidade de realizar cadastro, fazer login e adicionar tecnologias podendo atualizar ou excluir em caso de login logado.

A parte de back end ja estava pronta com api e endpoints para eu conectar com a biblioteca axios.

bom... Pra comecar fiz um projeto organizado em cada pasta respctiva para login, cadastro, login logado, e modais para adicionar tecnologias.

Usei duas context api no providers, a UserContext.jsx foi para login, cadastro e logado.

A TechContext.jsx para adicionar as tecnologias podendo editar ou excluir.

Usei estados para melhor manipulação de dados.

Usei a biblioteca react-hook-form para melhor envio de formulários.

Usei schemas para deixar o formulário mais explícito e claro para os usuários.

Adicionei atenticação de rotas com o react router dom usando outlet e navigate para deixar rotas publicas e privadas

Usei Childrens para mostrar tanto os formulários, quando quando logado 

Usei uma props para mostrar nome e módulo que adicionei ou editei 

Claro deixei os dados armazenados no localStorage para quando atualizar a pagina aparecer da onde estava tanto logado, quando adicionado as techs