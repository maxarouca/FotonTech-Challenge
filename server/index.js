<<<<<<< HEAD
import { ApolloServer, gql } from 'apollo-server'
import { makeExecutableSchema } from 'graphql-tools'
import * as BookType from './src/modules/book/BookType'
import * as AuthorType from './src/modules/author/AuthorType'
import Books from './src/modules/book/BookModel'
import Author from './src/modules/author/authorModel'
import mongoose from 'mongoose'
const mongo = 'mongodb://apollo:apollo123@ds215822.mlab.com:15822/apolloserver'

const SchemaDefinition = gql`
=======
import { ApolloServer, gql } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose'
const mongo = 'mongodb://fotontech:fotontech123@ds037468.mlab.com:37468/fotontech'

import * as BookType from './src/modules/book/BookType';
import * as AuthorType from './src/modules/author/AuthorType';
import Books from './src/mongo/index'

const SchemaDefinition = `
>>>>>>> 41c41a7cc35a7e29d63dd6dfbb4b5f978be9e3b1
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    allBooks: [Book]
    book(title: String!): Book
    allAuthors: [Author]
    author(name: String!): Author
  }
  type Mutation {
    addBook(title: String!, author: AuthorInput!): Book
    addAuthor(name: String!, age: Int!): Author
    removeBook(title: String!): [Book]
    removeAuthor(name: String!): [Author]
  }
`

const typeDefs = [BookType.typeDefs, AuthorType.typeDefs]

const resolvers = {
  Query: {
    ...BookType.resolvers,
    ...AuthorType.resolvers
  },
<<<<<<< HEAD
  Mutation: {
    addBook: (root, args, { Books }) => {
      Author.findOne({ name: args.author.name }, (err, author) => {
        if (!author) {
          const author = new Author(args.author)
          author.save()
          return author
        }
        if (err) {
          console.log(err)
        }
      })

      const book = new Books(args)
      book.save()
      return book
    },
    addAuthor: (root, args, { Author }) => {
      const author = new Author(args)
      author.save()
      return author
    },
    removeBook: (root, args, { Books }) => {
      Books.deleteOne(args, function (err) {
        console.log(err)
      })
    },
    removeAuthor: (root, args, { Author }) => {
      console.log(args)
      Author.deleteOne(args, function (err) {
        console.log(err)
      })
    }
  }
}
=======
};
>>>>>>> 41c41a7cc35a7e29d63dd6dfbb4b5f978be9e3b1

const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, ...typeDefs],
  resolvers
})

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({
    Books,
    Author
  })
})

mongoose
  .connect(
    mongo,
    { useNewUrlParser: true }
  )
  .then(() => {
    server.listen().then(({ url }) => {
<<<<<<< HEAD
      console.log(`🚀  Server ready at ${url}`)
    })
  })
  .catch(e => console.log(e))
=======
      console.log(`🚀  Server ready at ${url}`);
    });
  })
  .catch(e => console.log(e));
>>>>>>> 41c41a7cc35a7e29d63dd6dfbb4b5f978be9e3b1
