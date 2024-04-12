import Conta from "./Conta";

export class Debito extends Conta {
    private _valor: number;
    private _data: Date;

    constructor(_numero: string, _valor: number, _data: Date) {
        super(_numero);
        this._valor = _valor;
        this._data = _data;
    }

    get valor(): number {
        return this._valor;
    }

    set valor(value: number) {
        this._valor = value;
    }

    get data(): Date {
        return this._data;
    }

    set data(value: Date) {
        this._data = value;
    }
}