import '@babel/polyfill';

import { GraphQLServer } from 'graphql-yoga';
import { default as typeDefs } from './types';
import { default as resolvers } from './resolvers';

import { model } from './model';

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
  port: process.env.PORT || 5000
};

require('./db');
server
  .start(options, ({ port }) => {
    console.log(`Server is running on localhost:${port}`);
  })
  .catch(error => console.log(error));
