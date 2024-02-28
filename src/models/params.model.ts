export interface Query {
  search?: string;
  page?: number;
  take?: number;
}

export interface QueryStudent extends Query {}
