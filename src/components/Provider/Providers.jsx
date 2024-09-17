import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PropTypes from "prop-types";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalBackground: false,
      cacheTime: 10_000,
      refetchOnWindowFocus: false,
    },
  },
});

export const Providers = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

Providers.propTypes = {
  children: PropTypes.node,
};
