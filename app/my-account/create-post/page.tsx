import { PleaseLogin } from "@/components/please-login";
import { getAuthClient, onLogout } from "@faustwp/experimental-app-router";
import CreatePost from "./CreatePost";
export default async function Page() {
  const client = await getAuthClient();

  if (!client) {
    return <PleaseLogin />;
  }

  return (
    <main>
      <h2 className="flex justify-center">Create a Drafted Post</h2>

      <CreatePost />
    </main>
  );
}
