import { Cliente } from "./Cliente.js"; 
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122211107);

const conta1 = new ContaCorrente(0,cliente1, 1001);
conta1.depositar(500);
conta1.sacar(100);

const contaPoupanca = new ContaPoupanca(100, cliente1, 1001);
contaPoupanca.sacar(10);
conta1.teste();
console.log(contaPoupanca);
console.log(conta1);

//const conta = new Conta(0,cliente1,222);
//console.log(conta);

const contaSalario = new ContaSalario(0,"Willian", 2222);
console.log(contaSalario);