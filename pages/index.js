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


// export async function getStaticProps( {AnilistClient}) {
//   console.log(AnilistClient)
//   // const client = new AnilistClient ;


//   const result = await client.query({
//     query: gql`
//       query  {
//         Page (page:1, perPage: 12){
//           media(source:MANGA, format:MOVIE) {
//             id
//             coverImage {
//               large
//             }
//             title {
//               romaji
//               english
//             }
//           }
//         }
//       }
//     `
//   })

//   return {
//     props: {
//       animes: result.data.Page.media
//     },
//   };
// };
