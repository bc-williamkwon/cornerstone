import gql from "graphql-tag";
const GET_BRANDS = gql`
  query BrandsQuery($cursor: String) {
    site {
      brands(first: 4, after: $cursor) {
        pageInfo {
          hasNextPage
        }
        edges {
          node {
            id
            name
            path
            images {
              path
              url(width: 200, height: 200)
              altText
            }
          }
          cursor
        }
      }
    }
  }
`;
export default GET_BRANDS;
