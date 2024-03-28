import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { SortDirections, TableHeaders } from "../types";

type TableHeaderProps = {
  sortBy: TableHeaders.NAME | TableHeaders.COUNT;
  sortOrder: SortDirections.ASC | SortDirections.DESC;
  handleSort: (property: TableHeaders.NAME | TableHeaders.COUNT) => void;
};

export const TableHeader = ({
  sortBy,
  sortOrder,
  handleSort,
}: TableHeaderProps) => {
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
