import { Table, TableContainer, Paper } from "@mui/material";
import { TableHeader } from "./TableHeader";
import TableBody from "./TableBody";
import { Tag, SortsTypeProps } from "../types";

type TableRendererProps = SortsTypeProps & {
  tags: Tag[];
};

const TableRenderer = ({
  tags,
  sortBy,
  sortOrder,
  handleSort,
}: TableRendererProps) => {
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
