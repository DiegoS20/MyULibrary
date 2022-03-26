import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import login from "../../services/login";
import useUserInfo from "../../hooks/useUserInfo";

import "./index.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserInfo();
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    Swal.showLoading();
    const userInfo = {
      email,
      password,
    };
    return login(userInfo).then((res) => {
      if (res.success) {
        const user = res.user;
        setUser(user);
        navigate(`/${user.role}`);
        Swal.close();
      }
    });
  }

  return (
    <div className="login">
      <div className="login-form">
        <h1 className="form-title">Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Write email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Write password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
