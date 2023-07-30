import { useAtom } from "jotai";
import { useQuery } from "@tanstack/react-query";
import { searchTextAtom, searchResultAtom } from "../atoms/searchAtoms";

const useSearch = () => {
  const [searchText, setSearchText] = useAtom(searchTextAtom);
  const [searchResult, setSearchResult] = useAtom(searchResultAtom);

  const { isLoading, isError, data } = useQuery({
    queryKey: [searchText, "searchProduct"],
    queryFn: async () => {
      if (searchText) {
        const response = await fetch(
          `${import.meta.env.VITE_API}/product/search?title=${searchText}`
        );

        setSearchResult(response.json());
        return response;
      }
      return "";
    },
  });

  return { searchResult, isLoading, isError, data };
};

export default useSearch;
