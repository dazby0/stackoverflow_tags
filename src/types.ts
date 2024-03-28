export enum SortDirections {
  ASC = "asc",
  DESC = "desc",
}

export enum TableHeaders {
  NAME = "name",
  COUNT = "count",
}

export type Tag = {
  name: string;
  count: number;
};

export type SortsTypeProps = {
  sortBy: TableHeaders.NAME | TableHeaders.COUNT;
  sortOrder: SortDirections.ASC | SortDirections.DESC;
  handleSort: (property: TableHeaders.NAME | TableHeaders.COUNT) => void;
};

export type RowsPageProps = {
  page: number;
  rowsPerPage: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange: (newRowsPerPage: number) => void;
};
