import { FuncionarioDoBanco } from "../funcionarios";

console.log("\n");
console.log("====================== Banco ======================" + "\n");

// Aplicação 1
const gerente = new FuncionarioDoBanco("João", 35, "Av. Principal, 123");
const atendente = new FuncionarioDoBanco("Maria", 25, "Rua Secundária, 456");
console.log("\n");
gerente.listarEnderecos();
atendente.listarEnderecos();
console.log("\n");
console.log("=========================================================" + "\n");