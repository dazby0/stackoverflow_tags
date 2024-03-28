import { SortDirections, TableHeaders } from "../types";

type Tag = {
  name: string;
  count: number;
};

export const sortTags = (
  tags: Tag[],
  sortBy: TableHeaders.NAME | TableHeaders.COUNT,
  sortOrder: SortDirections.ASC | SortDirections.DESC
): Tag[] => {
  return [...tags].sort((a, b) => {
    if (sortBy === TableHeaders.NAME) {
      return sortOrder === SortDirections.ASC
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else {
      return sortOrder === SortDirections.ASC
        ? a.count - b.count
        : b.count - a.count;
    }
  });
};
