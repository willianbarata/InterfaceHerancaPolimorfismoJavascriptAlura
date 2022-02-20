import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(0,cliente,agencia);
        ContaCorrente.numeroDeContas += 1;
    }
    teste(){
        super.teste();
        console.log("teste na classe conta Corrente");
    }
    
    sacar(valor){
        let taxa = 1.1;
        
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valor;
        }
    }
}