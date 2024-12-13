import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8082/graphql', 
  cache: new InMemoryCache(), 
});


const ApolloClientProvider = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

export { ApolloClientProvider };
