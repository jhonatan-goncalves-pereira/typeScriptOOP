import Pessoa from './Pessoa';
import Cargo from './Cargo';
import Endereco from './Endereco';


class Funcionario extends Pessoa {
    private _salario: number;
    private _cargo: Cargo;

    constructor(cpf: string, nome: string, telefone: string, salario: number, cargo: Cargo) {
        super(cpf, nome, telefone);
        this._salario = salario;
        this._cargo = cargo;
    }

    get salario(): number {
        return this._salario;
    }

    set salario(value: number) {
        this._salario = value;
    }

    get cargo(): Cargo {
        return this._cargo;
    }

    set cargo(value: Cargo) {
        this._cargo = value;
    }

    exercer() {
        // Implementação aqui
    }
}

export default Funcionario;
