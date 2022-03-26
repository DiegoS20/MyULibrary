import { API_URL } from "./settings";

export default async function getBookStock(id_book) {
  return fetch(`${API_URL}/get_book_stock`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id_book }),
  }).then((res) => res.json());
}
