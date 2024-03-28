import TableTags from "../components/TableTags";

export default {
  title: "TableTags",
  component: TableTags,
};

export const Default = {
  args: {
    isLoading: false,
    isError: false,
    errorMessage: "Error!",
    displayedTags: [
      { name: "Tag 1", count: 1 },
      { name: "Tag 2", count: 2 },
    ],
    tagsCount: 30,
    sortBy: "count",
    sortOrder: "desc",
    page: 0,
    rowsPerPage: 5,
  },
};
