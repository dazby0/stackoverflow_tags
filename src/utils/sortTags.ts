interface Tag {
  name: string;
  count: number;
}

export const sortTags = (
  tags: Tag[],
  sortBy: "name" | "count",
  sortOrder: "asc" | "desc"
): Tag[] => {
  return [...tags].sort((a, b) => {
    if (sortBy === "name") {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else {
      return sortOrder === "asc" ? a.count - b.count : b.count - a.count;
    }
  });
};
