import React from "react";
import ReactDOM from "react-dom/client";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import App from "./App.tsx";
import "./index.css";
import { API_URL } from "./constants/constants.js";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
