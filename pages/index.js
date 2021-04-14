import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { AnilistClient } from "../http/AnilistClient";

export default function Home() {
  return (
    <ApolloProvider client={AnilistClient}>
      <App />
    </ApolloProvider>
  )
}
