"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
var conta_1 = require("./conta");
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca() {
        return _super.call(this) || this;
    }
    ContaPoupanca.prototype.depositar = function (valor) {
        var credito = new Credito(valor);
        this.creditos += valor;
        this.saldo += valor;
        console.log("Depositado: R$ ".concat(valor));
    };
    ContaPoupanca.prototype.sacar = function (valor) {
        var novoSaldo = this.saldo - valor;
        if (novoSaldo < 0) {
            console.log("Saldo insuficiente para saque.");
            return;
        }
        var debito = new Debito(valor);
        this.debitos += valor;
        this.saldo -= valor;
        console.log("Sacado: R$ ".concat(valor));
    };
    ContaPoupanca.prototype.calcularSaldo = function () {
        return this.creditos - this.debitos;
    };
    return ContaPoupanca;
}(conta_1.Conta));
exports.ContaPoupanca = ContaPoupanca;
var Credito = /** @class */ (function () {
    function Credito(valor) {
        this.valor = valor;
    }
    return Credito;
}());
var Debito = /** @class */ (function () {
    function Debito(valor) {
        this.valor = valor;
    }
    return Debito;
}());
