import {Conta} from "./Conta";

export class Credito extends Conta{
    private _valor:number; 
    private _data :Date; 

    constructor(_numero: string,_valor: number, _data: Date){
        super(_numero);
        this._valor = _valor;
        this._data = _data;
    }

    get valor(): number{
        return this._valor;
    }

    set valor(_valor){
        this._valor = _valor;
    }

    get data(): Date{
        return this._data;
    }

    set data(_data: Date){
        this._data = _data;
    }
}