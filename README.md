# Gerenciador de Tarefas em React 📝 

Um simples aplicativo de gerenciamento de tarefas construído com React e uma API local para adicionar, remover e marcar tarefas como concluídas.

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Configuração do Projeto](#configuração-do-projeto)
- [Como Usar](#como-usar)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

Este projeto é um gerenciador de tarefas onde você pode:
- Adicionar novas tarefas.
- Definir a duração das tarefas.
- Marcar tarefas como concluídas.
- Remover tarefas.

O frontend é construído com React e utiliza uma API local para persistir dados. A interface inclui ícones para marcar e remover tarefas, além de um formulário para adicionar novas tarefas.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **JSON Server**: Para criar uma API RESTful localmente.
- **CSS**: Para estilização da aplicação.
- **React Icons**: Biblioteca para ícones.

## Configuração do Projeto

### Pré-requisitos

Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

### Clonando o Repositório

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/gerenciador-tarefas.git

2.  Navegue até o diretório do projeto:
 ```bash
 cd gerenciador-tarefas
```
4.  Instale o JSON Server globalmente:
 ```bash
   npm install -g json-server
```
5.Navegue até o diretório onde está o arquivo db.json (geralmente na raiz do projeto) e inicie o JSON Server:
```bash
json-server --watch db.json --port 5000
```
6. Instalando Dependências
 No diretório do projeto, instale as dependências:
```bash
npm install
```
7. Rodando o Projeto
Inicie o servidor de desenvolvimento:
```bash
npm start
```

## Como Usar
Após iniciar o servidor de desenvolvimento, você pode acessar a aplicação em http://localhost:3000.

Adicionar Tarefas: Use o formulário disponível para adicionar novas tarefas.
Marcar Tarefas como Concluídas: Clique no ícone apropriado ao lado da tarefa.
Remover Tarefas: Clique no ícone de remoção ao lado da tarefa.

## Contribuição
Se você deseja contribuir para o projeto, sinta-se à vontade para fazer um fork do repositório e enviar pull requests com melhorias e correções.

## Licença
Este projeto está licenciado sob a Licença MIT.
```bash
Você pode ajustar o link do repositório e qualquer outra informação específica conforme necessário.
```
