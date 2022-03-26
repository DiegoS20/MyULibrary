import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BooksDataTable from "../BooksDataTable";
import getBooks from "../../services/getBooks";
import useUserInfo from "../../hooks/useUserInfo";
import getBooksRequested from "../../services/getBooksRequested";
import useRequestedBooks from "../../hooks/useRequestedBooks";

import "./index.scss";

export default function Student() {
  const [booksAvailable, setBooksAvailable] = useState([]);
  const { user } = useUserInfo();
  const { books: requestedBooks, setBooks: setRequestedBooks } =
    useRequestedBooks();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || Object.keys(user).length === 0) return navigate("/login");
    getBooks().then((res) => {
      if (res.success) setBooksAvailable(res.books);
    });

    getBooksRequested(user["id"]).then((res) => {
      if (res.success) setRequestedBooks(res.books);
    });
  }, [user]);

  return (
    <div className="student">
      <h1 className="main-title">Hello back, {user["first_name"]}</h1>
      <BooksDataTable title="Books requested" data={requestedBooks} />
      <div style={{ height: "100px" }} className="blank_space"></div>
      <BooksDataTable
        title="Books available"
        data={booksAvailable}
        showDetails
      />
    </div>
  );
}
