import { useQuery, useQueryClient } from "@tanstack/react-query";
import { mockAPICall } from "./helper/mockAPICall";

const FetchQuery = () => {
  const queryClient = useQueryClient();

  const { data, error, refetch, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: mockAPICall,
    enabled: false,
    retry: false,
  });

  console.log("data and error...", data, error);

  const clicked = () => {
    queryClient.resetQueries(['repoData']);
    refetch();
  };

  return (
    <div>
      <button
        className="flex m-auto border-solid border-black px-7 py-3 border-2 hover:border-gray-400 active:text-gray-400"
        onClick={clicked}
      >
        React Query
      </button>
      <div className="py-3 flex m-auto justify-center">
        {isFetching && (
          <div className="text-slate-400">{"Loading..."}</div>
        )}
        {data && <div className="text-green-500">{data}</div>}
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default FetchQuery;
