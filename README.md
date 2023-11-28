Como rodar o projeto na sua máquina

### 1. Clone o repositório.

```bash
  git clone https://github.com/sergiohdljr/api-rede-social-beyond.git
```

### 2. Instale as dependências

```bash
  cd api-rede-social-beyond/
  npm install
```

### 3. Iniciando o Servidor

```bash
  npm run start:dev
```

o servidor agora vai estar rodando na porta `http://localhost:3000`

Você pode acessar a API do servidor usando os seguintes endpoints:

### `GET`

- `/api/v1/posts`: Retorna todos os posts publicados

### `POST`

- `/api/v1/posts`: Faz a publicação de um novo post

  - Body:

    ```json
    {
      "texto": "string",
      "foto": "string",
      "horario": "string",
      "data": "string",
      "id": "string",
      "user": {
        "fotoPerfil": "string",
        "nome": "string",
        "username": "string"
      }
    }
    ```

### `DELETE`

- `/api/v1/posts-delete/:id`: Deleta um post especifico pelo id

  - paramns :

  ```bash
  id: string
  ```

### `PUT`

- `/api/v1/posts-update/:id`: Atualiza o texto de post

  - paramns :

  ```bash
  id: string
  ```

  - body :

  ```json
  "texto":"string"
  ```
