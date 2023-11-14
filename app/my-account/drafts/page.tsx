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
      query GetViewerDraftPosts {
        viewer {
          name
          draftPosts: posts(where: { status: DRAFT }) {
            nodes {
              id
              title
              content
            }
          }
        }
      }
    `,
  });

  return (
    <>
      <div className="flex justify-center">
        <h2>Welcome {data.viewer.name}!</h2>
      </div>
      <div className="flex justify-center">
        <h3>My Drafted Posts</h3>
      </div>
      <div className="flex justify-center">
        <ul>
          {data.viewer.draftPosts.nodes.map((post) => (
            <li className="card" key={post.id}>
              <h4>{post.title}</h4>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </li>
          ))}
        </ul>
      </div>
      <form action={onLogout} className="flex justify-center mt-4">
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
