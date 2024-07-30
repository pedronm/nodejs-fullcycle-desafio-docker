# Rodando o projeto

  ```
    docker compose up
  ```

### Testando

A api esta exposta na porta 8080, daí é só usar no navegador ou no postman

- **Inserindo usuários**: `GET /inserir-usuario/:nome`
    ```sh
    curl http://localhost:8080/inserir-usuario/ValentinoRossi
    ```

- **Recuperando usuários**: `GET /`
    ```sh
    curl http://localhost:8080/
    ```

- **Teste de fumaça**: `GET /health`
    ```sh
    curl http://localhost:8080/health
    ```
