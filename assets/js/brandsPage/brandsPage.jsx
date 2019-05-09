import React from 'react';
import {Query, ApolloProvider} from 'react-apollo';
import gql from 'graphql-tag';
import {ApolloClient} from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import Brand from './brand.jsx';
const link = new HttpLink({
  uri: 'https://my-dev-store-610366255.store.bcdev/graphql',
});
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link
});
const GET_BRANDS=gql`
{
  site {
    brands {
      pageInfo{
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          name
          images {
            path
            url(width:200,height:200),
            altText
          }
        }
      }
    }
  }
}
`
const BrandsPage=()=>{
    return <ApolloProvider client={apolloClient}>
            <Query query={GET_BRANDS}>
            {({ loading, error, data }) => {
              if (loading) return null;
              if (error) return `Error! ${error}`;
              console.log(data.site.brands.edges);
              return <div>{data.site.brands.edges.map((e,i)=><Brand key={i} brand={e.node}/>)}</div>;
            }}
            </Query>
           </ApolloProvider>
};
export default BrandsPage;