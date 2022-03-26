import { useState, useEffect } from "react";
import BooksDataTable from "../BooksDataTable";
import getBooks from "../../services/getBooks";
import useUserInfo from "../../hooks/useUserInfo";
import getBooksRequested from "../../services/getBooksRequested";

import "./index.scss";

export default function Student() {
  const [booksAvailable, setBooksAvailable] = useState([]);
  const [booksRequested, setBooksRequested] = useState([]);
  const { user } = useUserInfo();

  useEffect(() => {
    getBooks().then((res) => {
      if (res.success) setBooksAvailable(res.books);
    });

    getBooksRequested(user["id"]).then((res) => {
      if (res.success) setBooksRequested(res.books);
    });
  }, [user]);

  return (
    <div className="student">
      <h1 className="main-title">Hello back, {user["first_name"]}</h1>
      <BooksDataTable title="Books requested" data={booksRequested} />
      <div style={{ height: "100px" }} className="blank_space"></div>
      <BooksDataTable
        title="Books available"
        data={booksAvailable}
        showDetails
      />
    </div>
  );
}
