import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          companies: {
            keyArgs: ['where', 'orderBy'],
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
          aggregateCompany: {
            merge(_, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});

export { client };
