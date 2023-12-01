import { GraphQLClient } from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const hygraph = new GraphQLClient(graphqlAPI);

  try {
    const response = await hygraph.request(`query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            description
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
            content{
              raw
            }
          }
        }
      }
    }`);

    // Update the return statement based on the actual structure of the response
    return response.postsConnection.edges.map((edge) => edge.node);
  } catch (error) {
    console.error("GraphQL request error:", error);
    throw error;
  }
};

export default async function getPostDetails(slug) {
  const response = await fetch(process.env.GRAPHCMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // GraphQL query to Hygraph to retrieve artist content by slug
      query: `
      query Blog($slug: String!) {
        post(where: {slug: $slug}) {
          author {
            id
            name
            bio
            photo {
              url
            }
            createdAt
          }
          slug
          title
          categories {
            name
            slug
          }
          content {
            raw
          }
          featuredImage {
            url
          }
        }
      }
      `,
      variables: {
        slug: slug,
      },
    }),
  });
  // console.log(response);
  // console.log(response.errors);
  const data = await response.json();
  // console.log(data.data.blog;
  return data.data.post;
}
