import { Cliente } from "../clientes";
import { ContaCorrente } from "../contaCorrente";
import { ContaPoupanca } from "../contaPoupanca";

console.log("\n");
console.log("====================== Banco ======================" + "\n");

// Aplicação 4
const cliente3 = new Cliente("Marcos", 45, "Av. Central, 321");
const cliente3_1 = new Cliente("Orlando", 74, "Av. Beira Mar, 458");
const contaCorrente2 = new ContaCorrente();
const contaPoupanca = new ContaPoupanca();
cliente3.adicionarConta(contaCorrente2);
cliente3.adicionarConta(contaPoupanca);
contaCorrente2.depositar(1000);
contaPoupanca.depositar(1000);
contaCorrente2.transferir(500, contaPoupanca);
console.log("Saldo Conta Corrente: R$ " + contaCorrente2.calcularSaldo());
console.log("Saldo Conta Poupança: R$ " + contaPoupanca.calcularSaldo());
console.log("\n");
console.log("=========================================================" + "\n");
