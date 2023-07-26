export abstract class Pessoa {
  protected nome: string;
  protected idade: number;
  protected endereco: string;

  constructor(nome: string, idade: number, endereco: string) {
    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco;
  }

  abstract listarEnderecos(): void;
}