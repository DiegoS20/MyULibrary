import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BooksDataTable from "../BooksDataTable";
import UsersDataTable from "../UsersDataTable";
import useUserInfo from "../../hooks/useUserInfo";
import useBooks from "../../hooks/useBooks";
import RequestedBooksTable from "../RequestedBooksTable";

export default function Librarian() {
  const { books } = useBooks();
  const { user } = useUserInfo();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || Object.keys(user).length === 0) return navigate("/login");
  }, []);

  return (
    <div className="librarian">
      <BooksDataTable title="Books" data={books} showDetails addBooks />
      <div style={{ height: "100px" }}></div>
      <UsersDataTable />
      <div style={{ height: "100px" }}></div>
      <RequestedBooksTable />
    </div>
  );
}
