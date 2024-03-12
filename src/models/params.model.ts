export interface Query {
  search?: string;
  page?: number;
  perPage?: number;
}

export interface QueryUser extends Query {}

export interface QueryStudent extends Query {}

export interface QueryDiscipline extends Query {}
