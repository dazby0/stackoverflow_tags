import { useState, useEffect } from "react";
import TableTags from "./TableTags";
import useFetchTags from "../hooks/useFetchTags";
import { sortTags } from "../utils/sortTags";
import { SortDirections, TableHeaders } from "../types";

const TableTagsContainer = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortBy, setSortBy] = useState<TableHeaders.NAME | TableHeaders.COUNT>(
    TableHeaders.COUNT
  );
  const [sortOrder, setSortOrder] = useState<
    SortDirections.ASC | SortDirections.DESC
  >(SortDirections.DESC);

  const apiKey = import.meta.env.VITE_API_KEY;

  const {
    data: tags,
    isLoading,
    isError,
    error,
  } = useFetchTags("stackoverflow", apiKey);

  useEffect(() => {
    setPage(0);
  }, [tags]);

  const handleSort = (property: TableHeaders.NAME | TableHeaders.COUNT) => {
    setSortBy(property);
    setSortOrder((prevOrder) =>
      prevOrder === SortDirections.ASC
        ? SortDirections.DESC
        : SortDirections.ASC
    );
  };

  const displayedTags = tags
    ? sortTags(tags, sortBy, sortOrder).slice(
        page * rowsPerPage,
        (page + 1) * rowsPerPage
      )
    : [];

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (rowsPerPage: number) => {
    setRowsPerPage(rowsPerPage);
    setPage(0);
  };

  return (
    <TableTags
      isLoading={isLoading}
      isError={isError}
      errorMessage={error?.message}
      displayedTags={displayedTags}
      sortBy={sortBy}
      sortOrder={sortOrder}
      handleSort={handleSort}
      page={page}
      rowsPerPage={rowsPerPage}
      onPageChange={handlePageChange}
      onRowsPerPageChange={handleRowsPerPageChange}
      tagsCount={tags?.length || 0}
    />
  );
};

export default TableTagsContainer;
