"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clientes_1 = require("../clientes");
var contaCorrente_1 = require("../contaCorrente");
console.log("\n");
console.log("====================== Banco ======================" + "\n");
// Aplicação 3
var cliente2 = new clientes_1.Cliente("Ana", 27, "Rua das Árvores, 987");
var contaCorrente = new contaCorrente_1.ContaCorrente();
cliente2.adicionarConta(contaCorrente);
contaCorrente.depositar(100);
contaCorrente.depositar(100);
contaCorrente.depositar(100);
contaCorrente.sacar(50);
console.log("Saldo Conta Corrente: R$ " + contaCorrente.calcularSaldo());
console.log("\n");
console.log("=========================================================" + "\n");
