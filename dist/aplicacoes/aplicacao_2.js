"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clientes_1 = require("../clientes");
console.log("\n");
console.log("====================== Banco ======================" + "\n");
// Aplicação 2
var cliente1 = new clientes_1.Cliente("José", 30, "Rua das Flores, 789");
var cliente5 = new clientes_1.Cliente("José", 22, "Rua Da Romana, 654");
var cliente6 = new clientes_1.Cliente("José", 46, "Rua 7 de Setembro, 1423");
cliente1.listarEnderecos();
cliente5.listarEnderecos();
cliente6.listarEnderecos();
console.log("\n");
console.log("=========================================================" + "\n");
