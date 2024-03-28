import { useQuery } from "react-query";

type Tag = {
  name: string;
  count: number;
};

type ApiError = {
  message: string;
};

const fetchTags = async (site: string, apiKey: string) => {
  const params = new URLSearchParams();
  params.append("site", site);
  params.append("key", apiKey);
  const url = `https://api.stackexchange.com/2.3/tags?${params.toString()}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch tags");
  }
  const data = await response.json();
  return data.items.map((tag: any) => ({
    name: tag.name,
    count: tag.count,
  })) as Tag[];
};

const useFetchTags = (site: string, apiKey: string) => {
  return useQuery<Tag[], ApiError>(["tags", site, apiKey], () =>
    fetchTags(site, apiKey)
  );
};

export default useFetchTags;
