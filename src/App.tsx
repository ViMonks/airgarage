import React from "react";
import { Layout } from "./components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import Controller from "./components/Controller";
import { ReactQueryDevtools } from "react-query/devtools";

const myQueryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={myQueryClient}>
      {/*<ReactQueryDevtools />*/}
      <Layout>
        <Controller />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
