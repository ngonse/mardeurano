import React from "react";
import { Link, graphql } from "gatsby";

const Collections = ({ data }) => {
  console.log(data);

  return (
    <div className="m-5">
      <Link to="/" className="text-underline">
        back
      </Link>
      <h1>Collections</h1>
    </div>
  );
};

export const query = graphql`
  query Prueba {
    allShopifyCollection(sort: { fields: [title] }) {
      nodes {
        id
        title
        handle
        products {
          title
          images {
            localFile {
              childImageSharp {
                fixed(width: 600, height: 800) {
                  src
                }
              }
            }
          }
          shopifyId
          handle
          description
          availableForSale
          priceRange {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`;

export default Collections;
