export interface PaginationResponse<T> {
  total: number,
  limit: number,
  offset: number,
  items: T[]
}
