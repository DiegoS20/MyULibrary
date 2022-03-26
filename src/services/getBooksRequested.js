import { API_URL } from "./settings";

export default async function getBooksRequested(idUser) {
  return fetch(`${API_URL}/get_books_requested`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id_user: idUser }),
  }).then((res) => res.json());
}
