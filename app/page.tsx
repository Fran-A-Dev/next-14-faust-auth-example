import { getClient } from "@faustwp/experimental-app-router";
import { gql } from "@apollo/client";
import Link from "next/link";

export default async function Home() {
  let client = await getClient();

  const { data } = await client.query({
    query: gql`
      query GetPosts {
        posts {
          nodes {
            id
            title
            uri
            slug
          }
        }
      }
    `,
  });

  return (
    <main>
      <h2 className="text-3xl font-bold ">Star Wars Titles</h2>

      <ul>
        {data.posts.nodes.map((post) => (
          <li className="card">
            <Link href={`/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
