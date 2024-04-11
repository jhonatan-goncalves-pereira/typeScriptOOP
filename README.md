#  Projeto de Desenvolvimento em TypeScript com Node.js usando conceitos de OOP

Este repositório contém um projeto de desenvolvimento em TypeScript utilizando Node.js. O objetivo deste projeto é fornecer um ambiente de trabalho configurado para o desenvolvimento de programas orientados a objetos em TypeScript com Node.js, seguindo os conceitos de orientação a objetos e as práticas recomendadas.


## ✅ Objetivo

- Configurar um ambiente de trabalho para desenvolver programas em TypeScript (Node.js)
- Desenvolver programas orientados a objetos em TypeScript com Node.js

## 📑 Requisitos 
- [Node](https://nodejs.org/en/download)
- [TypeScrippt](https://www.typescriptlang.org/download)
- [IDE(VSCODE)](https://code.visualstudio.com/Download)


## 📖 Conteúdo

- Conceitos de Orientação a Objetos
- Configuração de um ambiente de trabalho para TypeScript
- Diferenças entre JavaScript e TypeScript
- Classes, atributos e métodos
- Construtores
- Getters e Setters
- Encapsulamento
- Herança e polimorfismo
- Classes e métodos abstratos

## ⚙ Funcionalidades Implementadas

1. **Criação das Classes Abstratas**: as classes `Conta` e `Pessoa` são classes abstratas, auxiliando na definição de outras classes.
2. **Criação da Interface `IUsuario`**: define um método que deve retornar `True` quando implementado nas classes que realizam a interface.
3. **Criação das Classes Concretas**: implementam as funcionalidades do sistema, incluindo:
   - Método `listarEnderecos()` da classe `Cliente`
   - Métodos `depositar()` e `sacar()` da classe `Conta`
   - Método `transferir()` da classe `ContaCorrente`
   - Método `calcularSaldo()` das classes `ContaPoupanca` e `ContaCorrente`
4. **Criação dos Relacionamentos entre Classes**: definição das associações entre as classes para representar os relacionamentos necessários.
5. **Criação de Objetos**: implementação de cenários de uso do sistema com diversas aplicações.

## 🔌 Executando o Projeto

1. Clone este repositório.
2. Instale as dependências utilizando `npm install`.
3. Execute o projeto com `npm start`.
4. Execute `npm install -g typescript`.

## 🎆 Aplicações

1. **Aplicação 1**: Criação de funcionários do banco.
2. **Aplicação 2**: Criação de clientes e adição de endereços.
3. **Aplicação 3**: Operações em uma conta corrente.
4. **Aplicação 4**: Operações entre contas corrente e poupança.
5. **Aplicação 5**: Teste de limite em transferência entre contas.

## 📁 Diretório
```
projeto-typescript/
│
├── src/                  # Código-fonte TypeScript
│   ├── models/           # Classes e interfaces do projeto
│   ├── services/         # Lógica de negócio e serviços
│   ├── utils/            # Funções utilitárias
│   └── index.ts          # Arquivo principal de inicialização do projeto
│
├── test/                 # Testes unitários
│
├── dist/                 # Código transpilado para JavaScript
│
├── node_modules/         # Dependências do projeto (geradas pelo npm/yarn)
│
├── package.json          # Metadados e dependências do projeto
├── tsconfig.json         # Configurações do TypeScript
└── .gitignore            # Arquivo para ignorar arquivos no Git
```

## 📈 Kanban no Trello

Para acompanhar o progresso deste projeto, utilize o quadro no Trello [clicando aqui](https://trello.com/invite/b/gd7lih0o/ATTI63f9cf756e55bd86a3047a04c5edda80174605B1/residencia-iuul-desafio-3-typescript-e-orientacao-a-objetos).

---

Este projeto faz parte da Formação Front-end Angular - Desafio #3 da [iUUL](https://www.iuul.com.br/).

**Autor:** [Jhonatan Gonçalves Pereira](https://www.linkedin.com/in/jhonatan-goncalves-pereira/)

---
