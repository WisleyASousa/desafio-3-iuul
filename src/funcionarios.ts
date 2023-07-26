import { Pessoa } from "./pessoa";


export class FuncionarioDoBanco extends Pessoa {
  constructor(nome: string, idade: number, endereco: string) {
    super(nome, idade, endereco);
  }

  listarEnderecos(): void {
    console.log("Endereço do Funcionário: " + this.endereco);
  }
}
