import { API_URL } from "./settings";

export default async function getBookGenres() {
  return fetch(`${API_URL}/get_genres`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.error(err));
}
