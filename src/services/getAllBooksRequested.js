import { API_URL } from "./settings";

export default async function getAllBookRequested() {
  return fetch(`${API_URL}/get_all_requested`).then((res) => res.json());
}
