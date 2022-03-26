import { API_URL } from "./settings";

export default function getUsers() {
  return fetch(`${API_URL}/get_users`)
    .then((res) => res.json())
    .then((res) => res);
}
