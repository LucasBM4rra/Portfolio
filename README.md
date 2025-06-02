# Portfólio - Lucas Borges Marra

Este é o código do meu portfólio pessoal, criado para apresentar minhas habilidades e trajetória profissional.

---

## Como rodar o projeto localmente

Para que o site funcione corretamente, especialmente o carregamento dinâmico das páginas, é necessário abrir o projeto através de um servidor local. Isso acontece porque navegadores bloqueiam requisições AJAX (fetch) quando se abre arquivos diretamente pelo sistema de arquivos (`file://`).

### Passos para rodar o servidor local

Se você possui o Visual Studio Code instalado, recomendo instalar a extensão **Live Server** e abrir o projeto usando esta extensão.

Se preferir usar um servidor simples pelo terminal, siga um dos métodos abaixo:

#### Usando Python (recomendado se Python estiver instalado)

1. Abra o terminal (Prompt de comando, PowerShell, Terminal do Linux ou Mac).
2. Navegue até a pasta raiz do projeto, por exemplo:
   ```bash
   cd caminho/para/a/pasta-do-projeto
3. Execute o comando para iniciar um servidor HTTP simples: python -m http.server 8000
4. http://localhost:8000


Importante
Abrir diretamente o arquivo index.html clicando duas vezes pode causar falhas no carregamento do conteúdo dinâmico.

Usar um servidor local garante que o AJAX funcione corretamente e o site seja exibido como esperado
