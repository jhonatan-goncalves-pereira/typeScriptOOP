import {Cliente} from "./src/models/Cliente";
import {Endereco} from "./src/models/Endereco";

// Adicionando endereços ao cliente
const endereco1 = new Endereco('CEP1', 'Rua A', '123', 'Complemento 1', 'Juazeiro do Norte', 'CE');
const endereco2 = new Endereco('CEP2', 'Rua B', '456', 'Complemento 2', 'Crato', 'CE');
const endereco3 = new Endereco('CEP3', 'Rua C', '789', 'Complemento 3', 'Barbalha', 'CE');


const cliente = new Cliente('12345678900', 'Cliente Teste', '123456789', false, [endereco1, endereco2, endereco3]);

// Imprimindo os endereços do cliente
cliente.listarEnderecos();

