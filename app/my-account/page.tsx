import { PleaseLogin } from "@/components/please-login";
import { gql } from "@apollo/client";
import { getAuthClient, onLogout } from "@faustwp/experimental-app-router";

export default async function Page() {
  const client = await getAuthClient();

  if (!client) {
    return <PleaseLogin />;
  }

  const { data } = await client.query({
    query: gql`
      query GetViewerPublishedPosts {
        viewer {
          name

          publishedPosts: posts(where: { status: PUBLISH }) {
            nodes {
              id
              title
            }
          }
        }
      }
    `,
  });

  return (
    <>
      <div className="flex justify-center mb-2">
        <h2>Welcome {data.viewer.name}!</h2>
      </div>
      <div className="flex justify-center mb-4">
        <h3 className="font-bold underline text-blue-900">
          My Post Titles List
        </h3>
      </div>
      <div className="flex justify-center mb-12">
        <ul>
          {data.viewer.publishedPosts.nodes.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>

      <form action={onLogout} className="flex justify-center">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
          type="submit"
        >
          Logout
        </button>
      </form>
    </>
  );
}
