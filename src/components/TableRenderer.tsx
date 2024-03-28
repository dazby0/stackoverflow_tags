import { Table, TableContainer, Paper } from "@mui/material";
import { TableHeader } from "./TableHeader";
import TableBody from "./TableBody";
import { SortDirections, TableHeaders } from "../types";

type Tag = {
  name: string;
  count: number;
};

type TableRendererProps = {
  tags: Tag[];
  sortBy: TableHeaders.NAME | TableHeaders.COUNT;
  sortOrder: SortDirections.ASC | SortDirections.DESC;
  handleSort: (property: TableHeaders.NAME | TableHeaders.COUNT) => void;
};

const TableRenderer = ({
  tags,
  sortBy,
  sortOrder,
  handleSort,
}: TableRendererProps) => {
  console.log(tags);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHeader
          sortBy={sortBy}
          sortOrder={sortOrder}
          handleSort={handleSort}
        />
        <TableBody tags={tags} />
      </Table>
    </TableContainer>
  );
};

export default TableRenderer;
