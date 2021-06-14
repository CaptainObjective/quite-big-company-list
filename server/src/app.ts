import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { FindManyCompanyResolver, AggregateCompanyResolver } from './generated/typegraphql-prisma';
import { PrismaClient } from '@prisma/client';

interface Context {
  prisma: PrismaClient;
}

(async () => {
  const schema = await buildSchema({
    resolvers: [FindManyCompanyResolver, AggregateCompanyResolver],
    validate: false,
  });

  const prisma = new PrismaClient();

  const server = new ApolloServer({ schema, playground: true, context: (): Context => ({ prisma }) });
  const port = process.env.PORT || 4000;
  const { url } = await server.listen(port);
  console.log(`🚀  Server ready at ${url}`);
})();
