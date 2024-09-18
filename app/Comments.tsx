import { use } from "react";
import { Comment } from "./types";

interface CommentsProps {
  productId: number;
}

async function getProductComments(productId: number) {
  return new Promise<Comment[]>((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, comment: "Comment 1" }]);
    }, 2000);
  });
}

export function Comments({ productId }: Readonly<CommentsProps>) {
  // Suspends until the promise resolves
  const comments = use(getProductComments(productId));

  return (
    <ul>
      {comments.map(({ id, comment }) => (
        <li key={id}>{comment}</li>
      ))}
    </ul>
  );
}
