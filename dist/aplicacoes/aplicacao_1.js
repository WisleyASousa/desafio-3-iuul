"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var funcionarios_1 = require("../funcionarios");
console.log("\n");
console.log("====================== Banco ======================" + "\n");
// Aplicação 1
var gerente = new funcionarios_1.FuncionarioDoBanco("João", 35, "Av. Principal, 123");
var atendente = new funcionarios_1.FuncionarioDoBanco("Maria", 25, "Rua Secundária, 456");
console.log("\n");
gerente.listarEnderecos();
atendente.listarEnderecos();
console.log("\n");
console.log("=========================================================" + "\n");
