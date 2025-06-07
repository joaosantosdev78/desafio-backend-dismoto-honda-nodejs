# Desafio Backend Dismoto Honda (nodeJS)
> Observação:
Optei por desenvolver o backend com Node.js e Express, já que é a stack que tenho domínio atualmente. Entrego o desafio com foco em qualidade de código, boas práticas e estrutura RESTful clara, como proposto. 

# 📌 Sobre o Projeto
Este projeto consiste no desenvolvimento de uma API RESTful utilizando Node.js e Express.js. A API foi projetada para atender aos requisitos do desafio técnico proposto pela Dismoto Honda, focando em boas práticas de desenvolvimento backend.

# 📚 Documentação

* A api está documentada com swagger. Para visualizar, é só acessar ``http://localhost:<PORTA>/api-docs/``

# 🚀 Tecnologias Utilizadas

* [NodeJS](https://nodejs.org/pt)
* [ExpressJS](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)
* [Helmet](https://helmetjs.github.io/)
* [mysql2](https://www.npmjs.com/package/mysql2)
* [cors](https://www.npmjs.com/package/cors)
* [Joi](https://joi.dev/)
* [morgan](https://www.npmjs.com/package/morgan)
* [swagger-ui-express]()

# ⚙️ Instalação e Execução

## Pré-requisitos

* Node.js instalado na versão mais recente
* Git instalado

## Passos para executar o projeto
1. Clone o repositório:

```bash
git clone https://github.com/joaosantosdev78/desafio-backend-dismoto-honda-nodejs.git
```

2. Acesse o diretório do projeto:

```bash
cd desafio-backend-dismoto-honda-nodejs
```

3. Instale as dependências:

```
npm install
```

5. Crie um arquivo ``.env `` na raiz do projeto e configure as variáveis de ambiente para conexão com o mysql. Exemplo:

```
DB_NAME=honda1
USER_DB=root
USER_DB_PASSWORD=2525
HOST=localhost
PORT=8080
```

6. Inicie o servidor:

```bash
npm start
```

> [!IMPORTANT]  
> Configure a porta do client corretamente no parâmetro origin do cors
> 
> O servidor estará disponível em  ``http://localhost:<PORTA>/``
