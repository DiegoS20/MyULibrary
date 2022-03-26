import { API_URL } from "./settings";

export default async function addUser(user = {}) {
  return fetch(`${API_URL}/add_user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
}
