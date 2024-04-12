import Cliente from './src/models/Cliente';
import ContaCorrente from './src/models/ContaCorrente';
import ContaPoupanca from './src/models/ContaPoupanca';

// Criando um cliente com uma ContaCorrente
const clienteContaCorrente = new Cliente('12345678900', 'Fulano', '123456789', false);
const contaCorrente = new ContaCorrente('987654', 0); // Saldo inicial 0
clienteContaCorrente.adicionarConta(contaCorrente);

// Efetuando um depósito de 1000 na ContaCorrente
contaCorrente.depositar(1000);

// Criando um cliente com uma ContaPoupanca
const clienteContaPoupanca = new Cliente('98765432100', 'Ciclano', '987654321', false);
const contaPoupanca = new ContaPoupanca('123456'); 
clienteContaPoupanca.adicionarConta(contaPoupanca);

// Efetuando um depósito de 1000 na ContaPoupanca
contaPoupanca.depositar(1000);

// Efetuando uma transferência de 500 reais da ContaCorrente para ContaPoupanca
contaCorrente.transferir(contaPoupanca, 500);

// Exibindo o saldo das duas contas
console.log(`Saldo da Conta Corrente: ${contaCorrente.calcularSaldo()}`);
console.log(`Saldo da Conta Poupança: ${contaPoupanca.calcularSaldo()}`);
