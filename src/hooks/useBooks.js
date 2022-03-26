import { useContext, useEffect } from "react";
import BooksContext from "../contexts/BooksContext";
import getBooks from "../services/getBooks";

export default function useBooks() {
  const { content, setContent } = useContext(BooksContext);

  useEffect(() => {
    retrieveBooks();
  }, []);

  function retrieveBooks() {
    getBooks().then((res) => {
      if (res.success) setContent(res.books);
    });
  }

  return {
    books: content,
    setBooks: setContent,
    updateBooksList: retrieveBooks,
  };
}
