import { Cliente } from "../clientes";

console.log("\n");
console.log("====================== Banco ======================" + "\n");

// Aplicação 2
const cliente1 = new Cliente("José", 30, "Rua das Flores, 789");
const cliente5 = new Cliente("José", 22, "Rua Da Romana, 654");
const cliente6 = new Cliente("José", 46, "Rua 7 de Setembro, 1423");
cliente1.listarEnderecos();
cliente5.listarEnderecos();
cliente6.listarEnderecos();
console.log("\n");
console.log("=========================================================" + "\n");