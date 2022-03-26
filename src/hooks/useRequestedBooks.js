import { useContext } from "react";
import RequestedBooksContext from "../contexts/RequestedBooksContext";

export default function useRequestedBooks() {
  const { content, setContent } = useContext(RequestedBooksContext);

  function addBook(book) {
    const copy = [...content];
    copy.push(book);
    setContent(copy);
  }

  return {
    books: content,
    setBooks: setContent,
    addBook,
  };
}
