import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function useUserInfo() {
  const { content, setContent } = useContext(UserContext);

  return {
    user: content,
    setUser: setContent,
  };
}
