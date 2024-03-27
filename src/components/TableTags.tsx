import React, { useState, useEffect } from "react";
import TableRenderer from "./TableRenderer";
import TablePagination from "./TablePagination";
import useFetchTags from "../hooks/useFetchTags";
import { sortTags } from "../utils/sortTags";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

const TableTags = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortBy, setSortBy] = useState<"name" | "count">("count");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const { loading, error, tags } = useFetchTags(
    "stackoverflow",
    "1G3sBZts4dDIrM1j)Cx1wQ(("
  );

  useEffect(() => {
    setPage(0); // Reset page when tags change
  }, [tags]);

  const handleSort = (property: "name" | "count") => {
    setSortBy(property);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (rowsPerPage: number) => {
    setRowsPerPage(rowsPerPage);
    setPage(0); // Reset page when rows per page changes
  };

  const sortedTags = tags ? sortTags(tags, sortBy, sortOrder) : [];

  return (
    <>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">Error with fetching data!</Alert>}
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <div className="bg-primary">
          {tags && (
            <>
              <h1 className="text-secondary text-4xl p-4 font-bold">Tags</h1>
              <TableRenderer
                tags={sortedTags.slice(
                  page * rowsPerPage,
                  (page + 1) * rowsPerPage
                )}
                sortBy={sortBy}
                sortOrder={sortOrder}
                handleSort={handleSort}
              />
              <TablePagination
                count={sortedTags.length}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TableTags;
