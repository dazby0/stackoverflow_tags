import TableRenderer from "../components/TableRenderer";

export default {
  title: "TableRenderer",
  component: TableRenderer,
};

export const Default = {
  args: {
    tags: [
      { name: "Tag 1", count: 1 },
      { name: "Tag 2", count: 0 },
    ],
    sortBy: "count",
    sortOrder: "desc",
    handleSort: "count",
  },
};
