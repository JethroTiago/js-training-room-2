import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", "11122233309");
const cliente2 = new Cliente("Alice", "88822233309");
const cliente3 = new Cliente("Jethro", "02202202202");

const conta1 = new ContaCorrente(1001, cliente1);
conta1.depositar(500);

const conta2 = new ContaCorrente(1001, cliente2);

const conta3 = new ContaCorrente(200, cliente3);

conta1.transferir(200, conta2);

console.log(conta2.saldo);