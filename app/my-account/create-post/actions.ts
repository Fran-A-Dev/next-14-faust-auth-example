"use server";

import { ApolloClient, gql, NormalizedCacheObject } from "@apollo/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const CREATE_POST_MUTATION = gql`
  mutation CreatePost($title: String!, $content: String!) {
    createPost(
      input: { content: $content, title: $title, status: DRAFT, authorId: "1" }
    ) {
      post {
        title
        content
      }
    }
  }
`;

async function createClient(): Promise<ApolloClient<NormalizedCacheObject>> {
  const client = await import("@faustwp/experimental-app-router").then(
    ({ getAuthClient }) => getAuthClient()
  );
  return client;
}

export async function addDraftPost(formData: FormData) {
  const client = await createClient();

  try {
    const { data } = await client.mutate({
      mutation: CREATE_POST_MUTATION,
      variables: {
        title: formData.get("title"),
        content: formData.get("content"),
      },
    });

    if (data?.createPost?.post) {
      console.log("Draft post created:", data.createPost.post);
    }
  } catch (error) {
    throw new Error("Could not create draft post.");
  } finally {
    revalidatePath("/my-account/drafts");
    redirect("/my-account/drafts");
  }
}
