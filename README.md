# Burger Queen App - Back-end

## Resumo

O objetivo desse projeto foi criar um back-end para manejar os dados da aplicação [Burger Queen App](https://github.com/mokasousa/RestaurantApp-Burger-Queen/). 
Para isso, foi criado um servidor web que deve _servir_ `JSON` através de uma conexão `HTTP`, a partir da integração de uma _API rest_, criada para que fosse compatível com as requisições necessárias na aplicação, 
a um banco de dados relacional.
Esse projeto foi criado a partir de um _boilerplate_, e o [modelo](https://github.com/rfukui/do-excel-ao-sistema-complexo), que já continha a estrutura básica do projeto e partiu-se então para a criação das tabelas necessárias no banco de dados e para criação dos testes de integração.

## Desenvolvimento

### HTTP API

#### `/products`

* `GET /products`
* `GET /products/:productid`
* `POST /products`
* `PUT /products/:productid`
* `DELETE /products/:productid`

#### `/orders`

* `GET /orders`
* `GET /orders/:orderid`
* `POST /orders`
* `PUT /orders/:orderid`
* `DELETE /orders/:orderid`

#### `/items`

* `GET /items`
* `GET /items/:itemid`
* `POST /items`
* `PUT /items/:itemid`
* `DELETE /items/:itemid`
* `GET /items/order/:orderid`

#### `/tables`

* `GET /tables`
* `GET /tables/:tableid`
* `POST /tables`
* `PUT /tables/:tableid`
* `DELETE /tables/:tableid`

### Testes de Integração

[!Test]()

### Cursos e Tutoriais de Apoio

* [Do excel ao sistema complexo](https://github.com/rfukui/do-excel-ao-sistema-complexo)
* [Curso de modelagem de dados](https://www.youtube.com/watch?v=Q_KTYFgvu1s)
* [Tutorial com Express e Sequelize](https://medium.com/italo-gouveia/criando-minha-primeira-api-rest-com-node-js-express-sequelize-e-mysql-para-cadastro-de-usu%C3%A1rios-1131a3e44ba1)
* [Tutorial extra](https://medium.com/@victorsteven/restful-api-with-nodejs-express-postgresql-sequelize-travis-mocha-coveralls-and-code-climate-f28715f7a014) 

### Próximas versões

Nas próximas versões serão criados _endpoints_ extras e testes _e2e_:

* Endpoint de histórico de pedidos
* Endpoint de criação de usuário
* Endpoint de alteração de usuário
* Endpoint de exclusão de usuário
* Autenticação com _JSON Web Token_ (JWT)
* Acrescentar níveis de permissão de usuário
* Testes _e2e_

## Ferramentas e Tecnologias utilizadas

* [Node.js](https://nodejs.org/);
* [Express](https://expressjs.com/), 
* [Sequelize](https://sequelize.org), 
* [PostgreSQL](https://www.postgresql.org/docs/)
* [Postman](https://www.getpostman.com)
* [Chai](https://www.chaijs.com/)
* [Mocha](https://mochajs.org/)
* [Heroku](https://www.heroku.com/)

## Considerações finais

Esse projeto foi desenvolvido como parte do currículo do [Bootcamp da Laboratória Brasil](https://www.laboratoria.la/br) e todos os requisitos para o projeto podem ser verificados [aqui](https://github.com/Laboratoria/SAP003-burger-queen-api).

O projeto foi desenvolvido por Mônica Sousa.