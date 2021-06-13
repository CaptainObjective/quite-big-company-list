import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Container } from '@chakra-ui/react';
import { Companies } from './components/Companies/Companies';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Container
        display="flex"
        marginTop="5rem"
        justifyContent="center"
        maxHeight="80vh"
        overflowY="scroll"
        maxW="container.lg"
      >
        <Companies />
      </Container>
    </ApolloProvider>
  );
};

export { App };
