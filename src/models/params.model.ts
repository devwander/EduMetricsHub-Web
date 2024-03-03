export interface Query {
  search?: string;
  page?: number;
  perPage?: number;
}

export interface QueryStudent extends Query {}

export interface QueryDiscipline extends Query {}
