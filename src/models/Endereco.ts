class Endereco {
    private _cep: string;
    private _logradouro: string;
    private _numero: string;
    private _complemento: string;
    private _cidade: string;
    private _uf: string;

    constructor( _cep: string, _logradouro: string, _numero: string, _complemento: string, _cidade: string,_uf: string ) {
        this._cep = _cep;
        this._logradouro =_logradouro;
        this._numero = _numero;
        this._complemento =_complemento;
        this. _cidade =  _cidade;
        this._uf = _uf;
    }

    get cep(): string {
        return this._cep;
    }

    set cep(value: string) {
        this._cep = value;
    }

    get logradouro(): string {
        return this._logradouro;
    }

    set logradouro(value: string) {
        this._logradouro = value;
    }

    get numero(): string {
        return this._numero;
    }

    set numero(value: string) {
        this._numero = value;
    }

    get complemento(): string {
        return this._complemento;
    }

    set complemento(value: string) {
        this._complemento = value;
    }

    get cidade(): string {
        return this._cidade;
    }

    set cidade(value: string) {
        this._cidade = value;
    }

    get uf(): string {
        return this._uf;
    }

    set uf(value: string) {
        this._uf = value;
    }
}