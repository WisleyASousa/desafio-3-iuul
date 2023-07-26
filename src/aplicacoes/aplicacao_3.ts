import { Cliente } from "../clientes";
import { ContaCorrente } from "../contaCorrente";

console.log("\n");
console.log("====================== Banco ======================" + "\n");

// Aplicação 3
const cliente2 = new Cliente("Ana", 27, "Rua das Árvores, 987");
const contaCorrente = new ContaCorrente();
cliente2.adicionarConta(contaCorrente);
contaCorrente.depositar(100);
contaCorrente.depositar(100);
contaCorrente.depositar(100);
contaCorrente.sacar(50);
console.log("Saldo Conta Corrente: R$ " + contaCorrente.calcularSaldo());
console.log("\n");
console.log("=========================================================" + "\n");