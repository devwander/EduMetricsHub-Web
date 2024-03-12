export type StudentHoursPerSemester = Semester[];

interface Semester {
  ano: string;
  semestre: number;
  horas_cursadas: number;
}
