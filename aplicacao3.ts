import {Cliente} from './src/models/Cliente';
import {ContaCorrente} from './src/models/ContaCorrente';
import { Endereco } from './src/models/Endereco';

const endereco1 = new Endereco('CEP1', 'Rua A', '123', 'Complemento 1', 'Juazeiro do Norte', 'CE');

const cliente = new Cliente('12345678900', 'Cliente Teste', '123456789', true, [endereco1]);


const contaCorrente = new ContaCorrente('123456', 0);

for (let i = 0; i < 3; i++) {
    contaCorrente.depositar(100);
}

//procedimento 
contaCorrente.sacar(50);

//                                      método/função
console.log(`Saldo da Conta Corrente: ${contaCorrente.calcularSaldo()}`);
