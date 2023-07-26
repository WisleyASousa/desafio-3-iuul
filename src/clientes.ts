import { Pessoa } from "./pessoa";
import { Conta } from "./conta";


export class Cliente extends Pessoa {
  private contas: Conta[] = [];

  constructor(nome: string, idade: number, endereco: string) {
    super(nome, idade, endereco);
  }

  listarEnderecos(): void {
    console.log("Endereço do Cliente: " + this.endereco);
  }

  adicionarConta(conta: Conta): void {
    this.contas.push(conta);
  }
}