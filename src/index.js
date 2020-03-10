import { GraphQLServer } from 'graphql-yoga';
import { default as typeDefs } from '../types';
import { default as resolvers } from '../resolvers';

import { model } from '../model';

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    model
  }
});

const options = {
  cors: {
    origin: true
  },
  port: 19714 || process.env.PORT
};

require('./db');
server
  .start(options, ({ port }) => {
    console.log(`Server is running on localhost:${port}`);
  })
  .catch(error => console.log(error));
