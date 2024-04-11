import Funcionario from './modelsFuncionario';
import Cargo

//Cargo para o gerente e o atendente
const cargoGerente = new Cargo('Gerente');
const cargoAtendente = new Cargo('Atendente');

// func do banco
const gerente = new Funcionario('12345678910', 'João Silva', '999999999', 5000, cargoGerente);
const atendente = new Funcionario('10987654321', 'Maria Santos', '888888888', 3000, cargoAtendente);

console.log('Dados do gerente:');
console.log('CPF:', gerente.cpf);
console.log('Nome:', gerente.nome);
console.log('Telefone:', gerente.telefone);
console.log('Salário:', gerente.salario);
console.log('Cargo:', gerente.cargo.nome);

console.log('\nDados do atendente:');
console.log('CPF:', atendente.cpf);
console.log('Nome:', atendente.nome);
console.log('Telefone:', atendente.telefone);
console.log('Salário:', atendente.salario);
console.log('Cargo:', atendente.cargo.nome);
