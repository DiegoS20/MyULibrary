import { API_URL } from "./settings";

export default async function addBook(book = {}) {
  return fetch(`${API_URL}/add_book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  })
    .then((res) => res.json())
    .then((res) => res);
}
