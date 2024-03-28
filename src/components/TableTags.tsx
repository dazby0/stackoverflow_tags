import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import TableRenderer from "./TableRenderer";
import TablePagination from "./TablePagination";
import { SortDirections, TableHeaders } from "../types";

type Tag = {
  name: string;
  count: number;
};

type TableTagsProps = {
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string | null;
  displayedTags: Tag[];
  tagsCount: number;
  sortBy: TableHeaders.NAME | TableHeaders.COUNT;
  sortOrder: SortDirections.ASC | SortDirections.DESC;
  handleSort: (property: TableHeaders.NAME | TableHeaders.COUNT) => void;
  page: number;
  rowsPerPage: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange: (rowsPerPage: number) => void;
};

const TableTags: React.FC<TableTagsProps> = ({
  isLoading,
  isError,
  errorMessage,
  displayedTags,
  sortBy,
  sortOrder,
  handleSort,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  tagsCount,
}) => {
  return (
    <>
      {isLoading && <CircularProgress />}
      {isError && errorMessage && (
        <Alert severity="error">Error: {errorMessage}</Alert>
      )}
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <div className="bg-primary">
          {displayedTags && (
            <>
              <h1 className="text-secondary text-4xl p-4 font-bold">Tags</h1>
              <TableRenderer
                tags={displayedTags}
                sortBy={sortBy}
                sortOrder={sortOrder}
                handleSort={handleSort}
              />
              <TablePagination
                count={tagsCount}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TableTags;
