import {ApolloClient, InMemoryCache, gql} from "@apollo/client";


export const AnilistClient = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
  
});
