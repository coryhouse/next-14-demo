import { use } from "react";
import { Comment } from "./page";

interface CommentsProps {
  commentsPromise: Promise<Comment[]>;
}

export function Comments({ commentsPromise }: Readonly<CommentsProps>) {
  // Suspends until the promise resolves
  const comments = use(commentsPromise);

  return (
    <ul>
      {comments.map(({ id, comment }) => (
        <li key={id}>{comment}</li>
      ))}
    </ul>
  );
}
