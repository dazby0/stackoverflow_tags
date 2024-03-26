import { useState, useEffect } from "react";

type Tag = {
  name: string;
  count: number;
};

type HookState = {
  loading: boolean;
  error: string | null;
  tags: Tag[] | null;
};

const useFetchTags = (site: string, apiKey: string): HookState => {
  const [hookState, setHookState] = useState<HookState>({
    loading: true,
    error: null,
    tags: null,
  });

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await fetch(
          `https://api.stackexchange.com/2.3/tags?site=${site}&key=${apiKey}`
        );
        const data = await res.json();

        if (res.ok) {
          const tagsData = data.items.map((tag: any) => ({
            name: tag.name,
            count: tag.count,
          }));
          setHookState({ loading: false, error: null, tags: tagsData });
        } else {
          throw new Error(data.error.message || "Failed to fetch tags");
        }
      } catch (error) {
        setHookState({ loading: false, error: "Unknown error!", tags: null });
      }
    };
    fetchTags();
  }, [site, apiKey]);

  return hookState;
};

export default useFetchTags;
