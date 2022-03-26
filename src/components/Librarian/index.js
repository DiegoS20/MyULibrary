import { useState, useEffect } from "react";
import BooksDataTable from "../BooksDataTable";
import getBooks from "../../services/getBooks";

export default function Librarian() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((res) => {
      if (res.success) setBooks(res.books);
    });
  }, []);

  return (
    <div className="librarian">
      <BooksDataTable title="Books" data={books} showDetails addBooks />
    </div>
  );
}
