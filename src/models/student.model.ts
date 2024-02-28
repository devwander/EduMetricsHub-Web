import { BaseInt } from ".";

export interface Student extends BaseInt {
  nome: string;
  cpf: string;
  arg_class: number;
  ano_entrada: number;
}
