import Cliente from "./src/models/Cliente";
import Endereco from "./src/models/Endereco";

const cliente = new Cliente('12345678900', 'Cliente Teste', '123456789', false);

// Adicionando endereços ao cliente
const endereco1 = new Endereco('CEP1', 'Rua A', '123', 'Complemento 1', 'Cidade A', 'UF1');
const endereco2 = new Endereco('CEP2', 'Rua B', '456', 'Complemento 2', 'Cidade B', 'UF2');
const endereco3 = new Endereco('CEP3', 'Rua C', '789', 'Complemento 3', 'Cidade C', 'UF3');

cliente.adicionarEndereco(endereco1);
cliente.adicionarEndereco(endereco2);
cliente.adicionarEndereco(endereco3);

// Imprimindo os endereços do cliente
console.log('Endereços do cliente:');
cliente.listarEnderecos();

