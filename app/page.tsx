import { Suspense } from "react";
import { Comments } from "./Comments";
import { Post } from "./types";

export default async function Home() {
  // Awaited, so will wait for the promise to resolve
  const postResponse = await fetch("http://localhost:3001/posts/1", {
    cache: "no-store",
  });
  const post = (await postResponse.json()) as Post;

  // Not awaited, so won't wait for the promise to resolve
  const commentsPromise = fetch("http://localhost:3001/comments?postId=1", {
    cache: "no-store",
  });

  return (
    <>
      <h1>{post.title}</h1>
      <Suspense fallback={<div>Loading comments...</div>}>
        <Comments commentsPromise={commentsPromise} />
      </Suspense>
    </>
  );
}
