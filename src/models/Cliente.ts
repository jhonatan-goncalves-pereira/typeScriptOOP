import Pessoa from './Pessoa';

class Cliente extends Pessoa {
    private _vip: boolean;

    constructor(cpf: string, nome: string, telefone: string, vip: boolean) {
        super(cpf, nome, telefone);
        this._vip = vip;
    }

    get vip(): boolean {
        return this._vip;
    }

    set vip(value: boolean) {
        this._vip = value;
    }

    listarEnderecos(): void {
        // Implementação do método listarEnderecos
    }
}

export default Cliente;
