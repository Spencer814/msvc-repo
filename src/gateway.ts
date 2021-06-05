import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'accounts', url: 'http://localhost:4001' },
    { name: 'content', url: 'http://localhost:4002' },
    { name: 'inventory', url: 'http://localhost:4003' },
    { name: 'products', url: 'http://localhost:4004' },
    { name: 'reviews', url: 'http://localhost:4005' },
  ],
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`);
});
