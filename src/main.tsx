import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { routeTree } from "./routeTree.gen";
import "./styles.css";

const queryClient = new QueryClient();

// Vite injects the configured base path here at build time.
// On GitHub Pages, this becomes `/<repo-name>/`. Locally it's `/`.
// Strip the trailing slash for TanStack Router's `basepath` option.
const basepath = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

const router = createRouter({
  routeTree,
  basepath,
  context: { queryClient },
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootEl = document.getElementById("root")!;
ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);