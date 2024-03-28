import { TableHeader } from "../components/TableHeader";

export default {
  title: "TableHeader",
  component: TableHeader,
};

export const Default = {
  args: {
    sortBy: "count",
    sortOrder: "desc",
    handleSort: "count",
  },
};
