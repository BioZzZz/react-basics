"use server";

import { revalidateTag } from "next/cache";

export async function editReviewAction({ id, review }) {
  const result = await fetch(`http://localhost:3001/api/review/${id}`, {
    method: "PATCH",
    body: JSON.stringify(review),
    headers: { "Content-Type": "application/json" },
  });

  revalidateTag("getReviewsByRestaurantId");

  return result.json();
}
