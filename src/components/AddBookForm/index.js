import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import getBookGenres from "../../services/getBookGenres";
import addBook from "../../services/addBook";

import "./index.scss";

export default function AddBookForm({ onBookAdded }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [stock, setStock] = useState(0);

  useEffect(() => {
    getBookGenres().then((res) => {
      if (res.success) {
        setGenres(res.genres);
        setSelectedGenre(res.genres[0].title);
      }
    });
  }, []);

  //#region handlers
  function handleSubmit(e) {
    e.preventDefault();
    Swal.showLoading();
    const newBook = {
      title,
      author,
      genre: selectedGenre,
      stock,
    };
    addBook(newBook).then((res) => {
      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Book added!",
        });
        if (typeof onBookAdded === "function") onBookAdded();
      }
    });
  }
  //#endregion

  return (
    <>
      <h2 className="add-book-title">Add a new book</h2>
      <form action="" className="add-book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write the book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Write the book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map((genre, i) => (
            <option value={genre.title} key={i}>
              {genre.title}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Write the number of copies of the book"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <Button type="submit" variant="contained" color="success">
          Add book
        </Button>
      </form>
    </>
  );
}
