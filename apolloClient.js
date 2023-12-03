import { ApolloClient, InMemoryCache } from "@apollo/client";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const client = new ApolloClient({
  url: graphqlAPI,
  cache: new InMemoryCache(),
});

export default client;
