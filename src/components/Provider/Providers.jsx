import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PropTypes from "prop-types";

const client = new QueryClient();

export const Providers = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

Providers.propTypes = {
  children: PropTypes.node,
};
