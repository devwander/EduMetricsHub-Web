import { BaseInt } from ".";

export interface Discipline extends BaseInt {
  codigo: string;
  nome: string;
  carga_horaria: number;
  credito: number;
  tipo: number;
}
