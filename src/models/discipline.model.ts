import { BaseInt } from ".";

export interface Discipline extends BaseInt {
  codigo: string;
  nome: string;
  carga_horaria: number;
  creditos: number;
  tipo: number;
}
