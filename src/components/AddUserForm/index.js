import { useState } from "react";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import addUser from "../../services/addUser";

export default function AddUserForm() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const [password, setPassword] = useState("");

  //#region handlers
  function handleSubmit(e) {
    e.preventDefault();
    Swal.showLoading();
    addUser({
      first_name,
      last_name,
      email,
      role,
      password,
    })
      .then((res) => {
        if (res.success) {
          Swal.fire({
            icon: "success",
            title: "User added!",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `Something went wrong: ${err}`,
        });
      });
  }
  //#endregion

  return (
    <>
      <h2 className="add-user-title">Add a new user</h2>
      <form action="" className="add-user-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write the user names"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Write the user last name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Write the user email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="librarian">Librarian</option>
        </select>
        <input
          type="password"
          placeholder="Write a password for this user"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="success">
          Add user
        </Button>
      </form>
    </>
  );
}
