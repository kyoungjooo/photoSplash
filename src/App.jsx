import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={router} />;
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
