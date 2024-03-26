import {
  TablePagination as MuiTablePagination,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type TablePaginationProps = {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  onRowsPerPageChange: (rowsPerPage: number) => void;
};

const TablePagination = ({
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}: TablePaginationProps) => {
  const handleRowsPerPageChange = (event: SelectChangeEvent<number>) => {
    const newRowsPerPage = event.target.value as number;
    onRowsPerPageChange(newRowsPerPage);
  };

  return (
    <MuiTablePagination
      component="div"
      count={count}
      page={page}
      rowsPerPage={rowsPerPage}
      onPageChange={onPageChange}
      labelRowsPerPage={
        <FormControl>
          <Select value={rowsPerPage} onChange={handleRowsPerPageChange}>
            {[5, 10, 15].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      }
    />
  );
};

export default TablePagination;
