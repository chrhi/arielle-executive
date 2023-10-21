import { commentValidator } from "@/lib/validators";
import { GraphQLClient, gql } from "graphql-request";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log(process.env.HYGRAPH_API_END_POINT!);
  console.log(process.env.GRAPHCMS_TOKEN);

  const payload = commentValidator.parse(body);

  const graphQLClient = new GraphQLClient(process.env.HYGRAPH_API_END_POINT!, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  const result = await graphQLClient
    .request(query, {
      name: payload.name,
      email: payload.email,
      comment: payload.comment,
      slug: payload.slug,
    })
    .catch((error) => {
      //   console.log("this is on the server");
      //   console.log(error);
    });

  return NextResponse.json("worked");
}
