import { Suspense } from "react";
import { Comments } from "./Comments";

interface Product {
  id: number;
  name: string;
}

export interface Comment {
  id: number;
  comment: string;
}

async function getProductById(id: number) {
  return new Promise<Product>((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Product 1" });
    }, 2000);
  });
}

async function getProductComments(productId: number) {
  return new Promise<Comment[]>((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, comment: "Comment 1" }]);
    }, 2000);
  });
}

export default async function Home() {
  // Awaited, so will wait for the promise to resolve
  const product = await getProductById(1);

  // Not awaited, so will not wait for the promise to resolve
  const commentsPromise = getProductComments(product.id);

  return (
    <>
      <h1>{product.name}</h1>
      <Suspense fallback={<div>Loading comments...</div>}>
        <Comments commentsPromise={commentsPromise} />
      </Suspense>
    </>
  );
}
