// src/models/Pessoa.ts

export abstract class Pessoa {
    private _cpf: string;
    private _nome: string;
    private _telefone: string;

    constructor (_cpf: string, _nome: string, _telefone: string){
        this._cpf = _cpf;
        this._nome = _nome;
        this._telefone = _telefone;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(value: string) {
        this._cpf = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get telefone(): string {
        return this._telefone;
    }

    set telefone(value: string) {
        this._telefone = value;
    }
}
