import {Pessoa} from './Pessoa';
import {Endereco} from './Endereco';
import {Conta} from './Conta';

export class Cliente extends Pessoa {
    private _vip: boolean;
    private _enderecos: Endereco[] = [];
    private _contas: Conta [];

    constructor(cpf: string, nome: string, telefone: string, vip: boolean, enderecos: Endereco []) {
        super(cpf, nome, telefone);
        this._vip = vip;
        this._enderecos = enderecos;
        this._contas = [];
    }

    get vip(): boolean {
        return this._vip;
    }

    set vip(value: boolean) {
        this._vip = value;
    }

    adicionarEndereco(endereco: Endereco): void {
        this._enderecos.push(endereco);
    }
    
    adicionarConta(conta: Conta): void {
        this._contas.push(conta);
    }

    listarEnderecos(): void {
        console.log("Endereços do cliente:");
        this._enderecos.forEach(endereco => {
            console.log(`CEP: ${endereco.cep}, Logradouro: ${endereco.logradouro}, Número: ${endereco.numero}, Cidade: ${endereco.cidade}`);
        });
    }
}
