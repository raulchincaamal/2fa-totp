import { DefaultOptions, QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClientOptions = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
    mutations: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  } as DefaultOptions,
}

const queryClient = new QueryClient(queryClientOptions)
export { QueryClientProvider, queryClient }
