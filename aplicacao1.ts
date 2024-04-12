import {Funcionario} from "./src/models/Funcionario";
import {Cargo} from "./src/models/Cargo";

const cargoGerente = new Cargo("Gerente");
const gerente = new Funcionario("12345678900", "João Silva", "123456789", 5000, cargoGerente);

const cargoAtendente = new Cargo("Atendente");
const atendente = new Funcionario("98765432100", "Maria Souza", "987654321", 2500, cargoAtendente);

console.log("Gerente:");
console.log(gerente);

console.log("\nAtendente:");
console.log(atendente);
