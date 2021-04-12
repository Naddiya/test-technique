import { ApolloProvider } from "@apollo/client";
import { AnilistClient } from "../http/AnilistClient";
import { DefaultComponent } from "../components/DefaultComponent";
import { AnimeList } from "../components/AnimeList";

export default function Home() {
  return (
    <ApolloProvider client={AnilistClient}>
      <div className="container">
        <DefaultComponent />
        <AnimeList />
        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0 auto;
          width: 75%;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      </div>
    </ApolloProvider>
  )
}
