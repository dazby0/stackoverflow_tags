import { TableBody as MuiTableBody } from "@mui/material";
import TableRow from "./TableRow";

type Tag = {
  name: string;
  count: number;
};

type TableBodyProps = {
  tags: Tag[];
};

const TableBody = ({ tags }: TableBodyProps) => {
  return (
    <MuiTableBody>
      {tags.map((tag) => (
        <TableRow key={tag.name} tag={tag} />
      ))}
    </MuiTableBody>
  );
};

export default TableBody;
