import { Cliente } from "./Cliente.js"; 
import { ContaCorrente } from "./ContaCorrete.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 11122211107);

const conta1 = new Conta(0,cliente1, 1001);
conta1.depositar(500);
conta1.sacar(100);

const contaPoupanca = new Conta(100, cliente1, 1001);
console.log(contaPoupanca);
console.log(conta1);