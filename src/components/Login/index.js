import { useState } from "react";

import "./index.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Logic to login the user goes here
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
