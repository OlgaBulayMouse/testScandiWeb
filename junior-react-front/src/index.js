import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client';


export const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });
  
export const GetProductsCertainCategory = gql`
  query {
    category {
      name
      products {
        id
        name
        prices {
          currency {
            symbol
          }
            amount
        }
      }
    }
 }
`;


client
.query({
   query: GetProductsCertainCategory
 })
.then(result => console.log(result));



ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);



