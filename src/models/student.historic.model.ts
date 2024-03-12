export type StudentHistoric = DisciplineHistoric[];

interface DisciplineHistoric {
  id_disciplina: number;
  nome: string;
  ano: number;
  semestre: number;
  status: number;
  nota: number;
}
