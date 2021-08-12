import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ContextProvider } from "./context/Context";

import { App } from "./App";
const client = new ApolloClient({
  uri: "https://petgram-server-edsf8xpy2.now.sh/graphql",
});

ReactDOM.render(
  <ContextProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ContextProvider>,
  document.getElementById("app")
);
