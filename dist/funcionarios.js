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
exports.FuncionarioDoBanco = void 0;
var pessoa_1 = require("./pessoa");
var FuncionarioDoBanco = /** @class */ (function (_super) {
    __extends(FuncionarioDoBanco, _super);
    function FuncionarioDoBanco(nome, idade, endereco) {
        return _super.call(this, nome, idade, endereco) || this;
    }
    FuncionarioDoBanco.prototype.listarEnderecos = function () {
        console.log("Endereço do Funcionário: " + this.endereco);
    };
    return FuncionarioDoBanco;
}(pessoa_1.Pessoa));
exports.FuncionarioDoBanco = FuncionarioDoBanco;
