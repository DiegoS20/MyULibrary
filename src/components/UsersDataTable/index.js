import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import getUsers from "../../services/getUsers";

import "./index.scss";
import columns from "./columns.json";
import { Button } from "@mui/material";
import AddUserForm from "../AddUserForm";

const mySwal = withReactContent(Swal);
export default function UsersDataTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    retrieveUsers();

    return () => {
      setUsers([]);
    };
  }, []);

  //#region handlers
  function handleAddUserClick() {
    mySwal.fire({
      html: <AddUserForm onUserAdded={() => retrieveUsers()} />,
      showConfirmButton: false,
    });
  }
  //#endregion

  function retrieveUsers() {
    getUsers().then((res) => {
      if (res.success) setUsers(res.users);
    });
  }

  return (
    <div className="users-data-table">
      <div className="users-title-btn">
        <div className="users-title">Users</div>
        <div className="users-add">
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddUserClick}
          >
            Add user
          </Button>
        </div>
      </div>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[]}
      />
    </div>
  );
}
