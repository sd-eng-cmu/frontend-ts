import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import App from "./App";

import "dayjs/locale/th";
import "index.css";

dayjs.extend(relativeTime);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <PrimeReactProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PrimeReactProvider>
  </QueryClientProvider>
);
