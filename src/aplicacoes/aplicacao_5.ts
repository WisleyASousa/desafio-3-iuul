import { Cliente } from "../clientes";
import { ContaCorrente } from "../contaCorrente";


console.log("\n");
console.log("====================== Banco ======================" + "\n");

// Aplicação 5
const cliente4 = new Cliente("Laura", 40, "Rua do Comércio, 753");
const contaCorrente3 = new ContaCorrente();
const contaCorrente4 = new ContaCorrente();
cliente4.adicionarConta(contaCorrente3);
cliente4.adicionarConta(contaCorrente4);
contaCorrente3.depositar(300);
contaCorrente3["limite"] = 100;
contaCorrente4.depositar(100);
contaCorrente3.transferir(1000, contaCorrente4); // Tenta transferir além do limite
console.log("Saldo Conta Corrente 3: R$ " + contaCorrente3.calcularSaldo());
console.log("Saldo Conta Corrente 4: R$ " + contaCorrente4.calcularSaldo());
console.log("\n");
console.log("=========================================================" + "\n");