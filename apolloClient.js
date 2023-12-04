const { ApolloClient, InMemoryCache } = require("@apollo/client");

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const client = new ApolloClient({
  uri: graphqlAPI,
  cache: new InMemoryCache(),
});

export default client;
