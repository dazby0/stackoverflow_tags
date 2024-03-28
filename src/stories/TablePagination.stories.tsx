import TablePagination from "../components/TablePagination";

export default {
  title: "TablePagination",
  component: TablePagination,
};

export const Default = {
  args: {
    count: 0,
    page: 1,
    rowsPerPage: 5,
  },
};
