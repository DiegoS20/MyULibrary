import { API_URL } from "./settings";

export default async function returnBook(idRequest, bookTitle) {
  return fetch(`${API_URL}/return_book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id_request: idRequest,
      book: bookTitle,
    }),
  }).then((res) => res.json());
}
