# Cadastro de carro

** Requisitos funcionais
- Deve ser possível cadastrar um novo carro.

** Regras de negócio
- Não deve ser possível cadastrar um carro com uma placa já existente.
- O carro deve ser cadastrado como disponível por padrão.
- O usuário responsável pelo cadastro deve ser um usuário administrador.


# Listagem de carros

** Requisitos funcionais
- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
- Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- Deve ser possível listar todos os carros disponíveis pelo nome do carro.

** Regras de negócio
- O usuário não precisa estar logado no sistema.


# Cadastro de Especificação no carro

** Requisitos funcionais
- Deve ser possível casdastrar uma especificação para um carro.

** Regras de negócio
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível casdastrar uma especificação já existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.


# Cadastro de imagens do carro

** Requisitos funcionais
- Deve ser possível cadastrar a imagem do carro.

** Requisitos não funcionais
- Utilizar o multer para upload dos arquivos.

** Regras de negócio
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.


# Aluguel de carro

** Requisitos funcionais
- Deve ser possível cadastrar um aluguel.

** Regras de negócio
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível casdastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- Não deve ser possível casdastrar um novo aluguel caso já exista um aberto para o mesmo carro.
- O usuário deve estar logado na aplicação

# Devolução de carro

** Requisitos funcionais
- Deve ser possível realizar a devolucção de um carro

** Regras de negócio
- Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
- Ao realizar a devolucção, o carro deverá ser liberado para outro aluguel.
- Ao realizar a devolucção, o usuário deverá ser liberado para outro aluguel.
- Ao realizar a devolucção, devrár ser calculado o total do aluguel.
- Caso o horário de devolução seja superior ao horário previsto de entraga, deverá ser cobrado multa proporcional aos dias de atraso.
- Caso haja multa, deverá ser somado ao total do aluguel.
- O usuário deve estar logado na aplicação


# Listagem de aluguéis para usuário

** Requisitos funcionais
- Deve ser possível realizar a busca de todos os aluguéis para o usuário

** Regras de negócio
- O usuário deve estar logado na aplicação


# Recuperar Senha

** Requisitos funcionais
- Deve ser possível o usuário recuperar a senha informando o e-mail
- O usuário deve receber um e-mail com o passo a passo a receuperação da senha
- O usuário deve conseguir inserir uma nova senha

** Regras de negócio
- O usuário precisa informar uma nova senha
- O link enviado para a recuperação deve expirar em 3 horas