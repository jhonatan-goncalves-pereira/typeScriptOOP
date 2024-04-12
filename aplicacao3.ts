import {Cliente} from './src/models/Cliente';
import {ContaCorrente} from './src/models/ContaCorrente';


const cliente = new Cliente('12345678900', 'Cliente Teste', '123456789', true);


const contaCorrente = new ContaCorrente('123456', 0);

for (let i = 0; i < 3; i++) {
    //procedimento
    contaCorrente.depositar(100);
}

//procedimento 
contaCorrente.sacar(50);

//                                      método/função
console.log(`Saldo da Conta Corrente: ${contaCorrente.calcularSaldo()}`);
