# auth-nodejs-sequelize

Projeto feito com nodejs e sequelize como ORM configurado com mysql.
Este pequeno projeto serve como um fabrica de autenticação, após feito o login usando email e senha ele devolve um token que contem as seguintes informações:

```
{
  "id": 1,
  "name": "Nome Usuário",
  "email": "email_usuario@gmail.com",
  "permitions": [
    {
      "id": 4,
      "name": "ADMIN"
    },
    {
      "id": 1,
      "name": "HIGH"
    }
  ],
  "iat": 1580861647
}
```

