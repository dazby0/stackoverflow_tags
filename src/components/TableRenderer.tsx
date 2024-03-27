import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from "@mui/material";

type Tag = {
  name: string;
  count: number;
};

type TableRendererProps = {
  tags: Tag[];
  sortBy: "name" | "count";
  sortOrder: "asc" | "desc";
  handleSort: (property: "name" | "count") => void;
};

const TableRenderer = ({
  tags,
  sortBy,
  sortOrder,
  handleSort,
}: TableRendererProps) => {
  const renderTableHeader = () => (
    <TableHead className="">
      <TableRow>
        <TableCell>
          <TableSortLabel
            active={sortBy === "name"}
            direction={sortBy === "name" ? sortOrder : "asc"}
            onClick={() => handleSort("name")}
            className="text-xl font-medium"
          >
            Name
          </TableSortLabel>
        </TableCell>
        <TableCell>
          <TableSortLabel
            active={sortBy === "count"}
            direction={sortBy === "count" ? sortOrder : "asc"}
            onClick={() => handleSort("count")}
            className="text-xl font-medium"
          >
            Count
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );

  const renderTableBody = () => (
    <TableBody>
      {tags.map((tag) => (
        <TableRow key={tag.name}>
          <TableCell>{tag.name}</TableCell>
          <TableCell>{tag.count}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );

  return (
    <TableContainer component={Paper}>
      <Table>
        {renderTableHeader()}
        {renderTableBody()}
      </Table>
    </TableContainer>
  );
};

export default TableRenderer;
