import { Conta } from "./conta";

export class ContaCorrente extends Conta {
  private limite: number = 0;
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
    if (novoSaldo < -100) {
      console.log("Não é possível sacar além do limite.");
      return;
    }

    const debito = new Debito(valor);
    this.debitos += valor;
    this.saldo -= valor;
    console.log(`Sacado: R$ ${valor}`);
  }

  calcularSaldo(): number {
    return this.creditos - this.debitos + 100;
  }

  transferir(valor: number, contaDestino: Conta): void {
    const novoSaldo = this.saldo - valor;
    if (novoSaldo < -100) {
      console.log("Não é possível transferir além do limite.");
      return;
    }

    const debito = new Debito(valor);
    this.debitos += valor;
    this.saldo -= valor;

    contaDestino.depositar(valor);
    console.log(`Transferido: R$ ${valor} para a Conta de destino.`);
  }
}
class Credito {
  constructor(public valor: number) {}
}
class Debito {
  constructor(public valor: number) {}
}
