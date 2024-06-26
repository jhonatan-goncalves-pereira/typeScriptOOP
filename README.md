#  Desenvolvimento de aplicação OO utilizando Typescript - desafio 03 - [iUUL](https://www.iuul.com.br/)
![image](https://github.com/jhonatan-goncalves-pereira/typeScriptOOP/assets/94761781/ebb76130-f027-4478-bf0d-2613674ccdf3)

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


## 🎆 Aplicações

1. ✅ **Aplicação 1**: Criação de funcionários do banco.
- criar dois funcionários do banco, um gerente e um atendente.
2. ✅ **Aplicação 2**: Criação de clientes e adição de endereços.
- Criar um cliente e adicione 3 endereços a ele
- Imprimir os endereços deste cliente
3. ✅ **Aplicação 3**: Operações em uma conta corrente.
- Criar um cliente que possua uma ContaCorrente
- Efetuar três depósitos de 100 nessa ContaCorrente
- Efetuar um saque de 50 reais nessa ContaCorrente
- Imprimir o valor do saldo dessa ContaCorrente
4. ✅ **Aplicação 4**: Operações entre contas corrente e poupança.
Criar um cliente que possua uma ContaCorrente
- Efetuar um depósito de 1000 nessa ContaCorrente
- Criar um cliente que possua uma ContaPoupanca
- Efetuar um depósito de 1000 reais nesta ContaPoupanca
- Efetuar uma transferência de 500 reais
5. ✅ **Aplicação 5**: Teste de limite em transferência entre contas.
- Criar um cliente que possua uma ContaCorrente
- Efetuar um depósito de 300 nessa ContaCorrente
- Definir o valor do limite da ContaCorrete para 100 reais
- Criar um cliente que possua uma ContaCorrente
- Efetuar um depósito de 100 reais nesta ContaCorrente
- Efetuar uma transferência de 1000 reais da primeira ContaCorrente para a
segunda ContaPoupanca


## 🔌 Executando o Projeto - TERMINAL DA RAIZ PROJETO

1. Clone este repositório:
```
git clone https://github.com/jhonatan-goncalves-pereira/typeScriptOOP.git
```
2. entre na raiz do projeto e Instale as dependências utilizando `npm install`(COM NODE JÁ INSTALADO).
```
npm install -g typescript
```
3. instalar o ts-node(interpretador TypeScript para o Node.js):
```
npm install -g ts-node
```
4. Execute 
```
ts-node aplicacao1.ts
```
Assim, pode-se ir substituindo o "aplicacao*" substituindo * pela número da aplicaçao

## 📝 Diagrama UML

![image](https://github.com/jhonatan-goncalves-pereira/typeScriptOOP/assets/94761781/31b63899-71e9-475d-b029-0a6881bd6759)

## 📁 Diretório
```
projeto-typescript/
│
├── src/                  # Código-fonte TypeScript
│   ├── models/           # Classes e interfaces do projeto
│   ├── services/         # Lógica de negócio e serviços
│   ├── utils/            # Funções utilitárias
│   └── index.ts          # Arquivo principal de inicialização do projeto
|
|
├── aplicacao1.ts
|
├── aplicacao2.ts
|
├── aplicacao3.ts
|
├── aplicacao4.ts
|
├── aplicacao5.ts
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
