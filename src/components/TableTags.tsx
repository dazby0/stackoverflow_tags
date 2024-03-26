import React, { useState, useEffect } from "react";
import TableRenderer from "./TableRenderer";
import TablePagination from "./TablePagination";
import useFetchTags from "../hooks/useFetchTags";
import { sortTags } from "../utils/sortTags";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  margin: "auto",
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: "center",
}));

const MainComponent = () => {
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

  const handlePageChange = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (rowsPerPage: number) => {
    setRowsPerPage(rowsPerPage);
    setPage(0); // Reset page when rows per page changes
  };

  const sortedTags = tags ? sortTags(tags, sortBy, sortOrder) : [];

  return (
    <StyledCard>
      <CardContent>
        {loading && <CircularProgress />}
        {error && <Alert severity="error">Error with fetching data!</Alert>}
        {tags && (
          <>
            <Typography variant="h5" gutterBottom>
              Tags
            </Typography>
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
      </CardContent>
    </StyledCard>
  );
};

export default MainComponent;
