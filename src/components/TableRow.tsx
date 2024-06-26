import { TableRow as MuiTableRow, TableCell } from "@mui/material";
import { Tag } from "../types";

type TableRowProps = {
  tag: Tag;
};

const TableRow = ({ tag }: TableRowProps) => {
  return (
    <MuiTableRow key={tag.name}>
      <TableCell>{tag.name}</TableCell>
      <TableCell>{tag.count}</TableCell>
    </MuiTableRow>
  );
};

export default TableRow;
