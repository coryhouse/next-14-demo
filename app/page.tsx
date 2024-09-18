import { Suspense } from "react";
import { Comments } from "./Comments";
import { Product } from "./types";

async function getProductById(id: number) {
  return new Promise<Product>((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Product 1" });
    }, 2000);
  });
}

export default async function Home() {
  // Awaited, so will wait for the promise to resolve
  const product = await getProductById(1);

  return (
    <>
      <h1>{product.name}</h1>
      <Suspense fallback={<div>Loading comments...</div>}>
        <Comments productId={1} />
      </Suspense>
    </>
  );
}
