import { ApolloServer, gql } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose'
const mongo = 'mongodb://fotontech:fotontech123@ds037468.mlab.com:37468/fotontech'

import * as BookType from './src/modules/book/BookType';
import * as AuthorType from './src/modules/author/AuthorType';
import Books from './src/mongo/index'

const SchemaDefinition = `
  schema {
    query: Query
  }
  type Query {
    books: [Book]
    authors: [Author]
  }
`;

const typeDefs = [
  BookType.typeDefs,
  AuthorType.typeDefs,
]

const resolvers = {
  Query: {
    ...BookType.resolvers,
    ...AuthorType.resolvers
  },
};

const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, ...typeDefs],
  resolvers
})

const server = new ApolloServer({ schema });

mongoose
  .connect(
    mongo,
    { useNewUrlParser: true }
  )
  .then(() => {
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  })
  .catch(e => console.log(e));