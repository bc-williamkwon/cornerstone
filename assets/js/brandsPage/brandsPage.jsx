import React from "react";
import { Query, ApolloProvider } from "react-apollo";
import BrandsList from "./brandsList.jsx";
import apolloClient from "./apolloClient.js";
import GET_BRANDS from "./brandsQuery.js";

const BrandsPage = () => (
  <ApolloProvider client={apolloClient}>
    <Query query={GET_BRANDS}>
      {({ data, loading, error, fetchMore }) => {
        if (loading) return <div>Loading brands to memory...</div>;
        if (error) return <div>{error.message}</div>;
        if (data.site.brands.pageInfo.hasNextPage) {
          fetchMore({
            variables: {
              cursor:
                data.site.brands.edges[data.site.brands.edges.length - 1].cursor
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              const combinedData = {
                site: {
                  brands: {
                    pageInfo: fetchMoreResult.site.brands.pageInfo,
                    edges: [
                      ...previousResult.site.brands.edges,
                      ...fetchMoreResult.site.brands.edges
                    ],
                    __typename: fetchMoreResult.site.brands.__typename
                  },
                  __typename: fetchMoreResult.site.__typename
                }
              };
              return combinedData;
            }
          });
        }
        return <BrandsList data={data} />;
      }}
    </Query>
  </ApolloProvider>
);
export default BrandsPage;
