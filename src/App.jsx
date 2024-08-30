import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FetchNormal from "./FetchNormal";
import FetchQuery from "./FetchQuery";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-3xl font-bold p-8">React Query Demo</h1>
        <FetchNormal />
        <FetchQuery />
      </div>
    </QueryClientProvider>
  );
}

export default App;
