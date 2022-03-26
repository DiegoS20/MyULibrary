import { API_URL } from "./settings";

export default function getBooks() {
  return fetch(`${API_URL}/get_books`)
    .then((res) => res.json())
    .then((res) => res);
}
