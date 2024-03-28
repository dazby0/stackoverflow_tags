import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import TableRenderer from "./TableRenderer";
import TablePagination from "./TablePagination";
import { Tag, SortsTypeProps, RowsPageProps } from "../types";

type TableTagsProps = SortsTypeProps &
  RowsPageProps & {
    isLoading: boolean;
    isError: boolean;
    errorMessage?: string | null;
    displayedTags: Tag[];
    tagsCount: number;
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
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : isError ? (
        <Alert severity="error">Error: {errorMessage}</Alert>
      ) : (
        <div className="relative overflow-x-auto shadow-md rounded-lg">
          <div className="bg-primary">
            {displayedTags && (
              <div>
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
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TableTags;
