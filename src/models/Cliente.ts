import Pessoa from './Pessoa';

class Cliente extends Pessoa {
    private _vip: boolean;
    private _enderecos: Endereco[];

    constructor(cpf: string, nome: string, telefone: string, vip: boolean) {
        super(cpf, nome, telefone);
        this._vip = vip;
        this._enderecos = [];
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
    
    listarEnderecos(): void {
        console.log("Endereços do cliente:");
        this._enderecos.forEach(endereco => {
            console.log(`CEP: ${endereco.cep}, Logradouro: ${endereco.logradouro}, Número: ${endereco.numero}`);
        });
    }
}

export default Cliente;
