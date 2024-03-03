export interface Meta {
  currentPage: number;
  firstPage: number;
  firstPageUrl: string | null;
  lastPage: number;
  lastPageUrl: string | null;
  nextPageUrl: string | null;
  perPage: number;
  previousPageUrl: string | null;
  total: number;
}

export interface Paginate<T> {
  meta: Meta;
  data: T[];
}
