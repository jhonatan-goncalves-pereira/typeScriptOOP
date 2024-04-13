// Importando as classes necessárias
import {Cliente} from './src/models/Cliente';
import {ContaCorrente} from './src/models/ContaCorrente';
import { Endereco } from './src/models/Endereco';

// Criando um cliente com uma ContaCorrente
const endereco1 = new Endereco('CEP1', 'Rua A', '123', 'Complemento 1', 'Juazeiro do Norte', 'CE');

const cliente1 = new Cliente('12345678900', 'Fulano', '123456789', false, [endereco1]);
const contaCorrente1 = new ContaCorrente('1111', 100); // Definindo o limite como 100 reais
cliente1.adicionarConta(contaCorrente1);

// Efetuando um depósito de 300 na ContaCorrente
contaCorrente1.depositar(300);

// Criando outro cliente com outra ContaCorrente
const endereco2 = new Endereco('CEP1', 'Rua A', '123', 'Complemento 1', 'Limoeiro do Norte', 'CE');

const cliente2 = new Cliente('98765432100', 'Ciclano', '987654321', false, [endereco2]);
const contaCorrente2 = new ContaCorrente('2222', 0); // Sem limite
cliente2.adicionarConta(contaCorrente2);

// Efetuando um depósito de 100 na segunda ContaCorrente
contaCorrente2.depositar(11000);

// Tentando efetuar uma transferência de 1000 da primeira ContaCorrente para a segunda
contaCorrente1.transferir(contaCorrente2, 1000);
