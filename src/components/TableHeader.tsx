import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { SortDirections, TableHeaders, SortsTypeProps } from "../types";

export const TableHeader = ({
  sortBy,
  sortOrder,
  handleSort,
}: SortsTypeProps) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <TableSortLabel
            active={sortBy === TableHeaders.NAME}
            direction={
              sortBy === TableHeaders.NAME ? sortOrder : SortDirections.ASC
            }
            onClick={() => handleSort(TableHeaders.NAME)}
          >
            Name
          </TableSortLabel>
        </TableCell>
        <TableCell>
          <TableSortLabel
            active={sortBy === TableHeaders.COUNT}
            direction={
              sortBy === TableHeaders.COUNT ? sortOrder : SortDirections.ASC
            }
            onClick={() => handleSort(TableHeaders.COUNT)}
          >
            Count
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
