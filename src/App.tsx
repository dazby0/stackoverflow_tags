import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import TableTagsContainer from "./components/TableTagsContainer";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <TableTagsContainer />
    </QueryClientProvider>
  );
}

export default App;
