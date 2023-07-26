import { Conta } from "./conta";


export class ContaPoupanca extends Conta {
  constructor() {
    super();
  }

  depositar(valor: number): void {
    const credito = new Credito(valor);
    this.creditos += valor;
    this.saldo += valor;
    console.log(`Depositado: R$ ${valor}`);
  }

  sacar(valor: number): void {
    const novoSaldo = this.saldo - valor;
    if (novoSaldo < 0) {
      console.log("Saldo insuficiente para saque.");
      return;
    }

    const debito = new Debito(valor);
    this.debitos += valor;
    this.saldo -= valor;
    console.log(`Sacado: R$ ${valor}`);
  }

  calcularSaldo(): number {
    return this.creditos - this.debitos;
  }
}

class Credito {
  constructor(public valor: number) {}
}

class Debito {
  constructor(public valor: number) {}
}