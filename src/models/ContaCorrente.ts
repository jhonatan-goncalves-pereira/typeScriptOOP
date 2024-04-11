import Conta from "./Conta";
import Debito from "./Debito";
import IUsuario from "./IUsuario";

class ContaCorrente extends Debito implements IUsuario {
    private _limite: number;
   
    constructor(_numero: string, limite: number) {
        super(_numero, 0, new Date()); //  dá pra definir o valor e a data como padrão para 0 e a data atual, respectivamente
        this._limite = limite;
    }

    get limite(): number {
        return this._limite;
    }

    set limite(value: number) {
        this._limite = value;
    }

    transferir(contaDestino: Conta, valor: number) {
        // Implementação aqui
    }

    autenticar(): boolean {
        // Implementação do método autenticar
        return true;
    }
}

export default ContaCorrente;
