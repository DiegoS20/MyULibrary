import { API_URL } from "./settings";

export default async function lendBook(requestInfo) {
  return fetch(`${API_URL}/lend_book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestInfo),
  }).then((res) => res.json());
}
