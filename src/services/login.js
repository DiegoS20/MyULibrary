import { API_URL } from "./settings";

export default async function login(userInfo = {}) {
  return fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  }).then((res) => res.json());
}
