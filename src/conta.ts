export abstract class Conta {
  protected saldo: number;
  protected creditos: number;
  protected debitos: number;

  constructor() {
    this.saldo = 0;
    this.creditos = 0;
    this.debitos = 0;
  }

  abstract depositar(valor: number): void;
  abstract sacar(valor: number): void;
  abstract calcularSaldo(): number;
}
