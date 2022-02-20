import { Cliente } from "./Cliente.js"; 
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 11122211107);

const conta1 = new ContaCorrente(0,cliente1, 1001);
conta1.depositar(500);
conta1.sacar(100);

const contaPoupanca = new ContaPoupanca(100, cliente1, 1001);
console.log(contaPoupanca);
console.log(conta1);