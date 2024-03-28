import { useQuery } from "react-query";
import { Tag } from "../types";

type ApiError = {
  message: string;
};

interface TagResponse {
  items: {
    name: string;
    count: number;
  }[];
}

const fetchTags = async (site: string, apiKey: string): Promise<Tag[]> => {
  const params = new URLSearchParams();
  params.append("site", site);
  params.append("key", apiKey);
  const queryParams = params.toString(); // Get the query parameters as a string

  const url = `https://api.stackexchange.com/2.3/tags?${queryParams}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch tags");
  }
  const data: TagResponse = await response.json();
  return data.items.map((tag) => ({
    name: tag.name,
    count: tag.count,
  }));
};

const useFetchTags = (site: string, apiKey: string) => {
  return useQuery<Tag[], ApiError>(["tags", site, apiKey], () =>
    fetchTags(site, apiKey)
  );
};

export default useFetchTags;
