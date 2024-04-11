import Conta from "./Conta";

class ContaPoupanca extends Conta {
    
    calcularSaldo(): number {
        // Implementação do cálculo do saldo para conta poupança
        return this.saldo; // Supondo que o saldo seja um atributo da classe Conta
    }
}

export default ContaPoupanca;
