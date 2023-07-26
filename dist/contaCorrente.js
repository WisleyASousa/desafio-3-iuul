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
exports.ContaCorrente = void 0;
var conta_1 = require("./conta");
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente() {
        var _this = _super.call(this) || this;
        _this.limite = 0;
        return _this;
    }
    ContaCorrente.prototype.depositar = function (valor) {
        var credito = new Credito(valor);
        this.creditos += valor;
        this.saldo += valor;
        console.log("Depositado: R$ ".concat(valor));
    };
    ContaCorrente.prototype.sacar = function (valor) {
        var novoSaldo = this.saldo - valor;
        if (novoSaldo < -100) {
            console.log("Não é possível sacar além do limite.");
            return;
        }
        var debito = new Debito(valor);
        this.debitos += valor;
        this.saldo -= valor;
        console.log("Sacado: R$ ".concat(valor));
    };
    ContaCorrente.prototype.calcularSaldo = function () {
        return this.creditos - this.debitos + 100;
    };
    ContaCorrente.prototype.transferir = function (valor, contaDestino) {
        var novoSaldo = this.saldo - valor;
        if (novoSaldo < -100) {
            console.log("Não é possível transferir além do limite.");
            return;
        }
        var debito = new Debito(valor);
        this.debitos += valor;
        this.saldo -= valor;
        contaDestino.depositar(valor);
        console.log("Transferido: R$ ".concat(valor, " para a Conta de destino."));
    };
    return ContaCorrente;
}(conta_1.Conta));
exports.ContaCorrente = ContaCorrente;
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
