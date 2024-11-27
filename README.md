# Instale as dependências do projeto
- pnpm install

# Instalação do PNPM

Caso não tenha o pnpm na sua máquina, recomendo que instale:

- npm install -g pnpm

[PNPM DOC](https://pnpm.io/pt/installation)

# Crie o arquivo .env

- cp .env.example .env

O próximo passo será pegar suas credênciais do firebase para configurar o .env e poder acessar seu ambiente.

Após criar seu projeto no firebase, siga o caminho:

Aba Criação > Authentication > Inicie um novo serviço de autenticação e selecione a opção "email/senha".
Depois disso, vá para "Configurações do projeto" e crie um novo App para ter acesso as credênciais.

daí pra frente o projeto é seu ...