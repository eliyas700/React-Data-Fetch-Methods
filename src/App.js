import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Quote from "./Components/React Query/Quote";

function App() {
  const client = new QueryClient(
    //For React Suspense

    {
      defaultOptions: { queries: { suspense: true } },
    }
  );
  return (
    <div className="App">
      <h2>Let's Fetch Data from URL</h2>
      <QueryClientProvider client={client}>
        <Suspense fallback={<h1>Loading Data</h1>}>
          <Quote />
          <Quote />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
}

export default App;
