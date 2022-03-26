import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import lendBook from "../../services/lendBook";

import "./index.scss";

export default function BookDetails({ bookInfo, idUser }) {
  const { id, title, author, genre } = bookInfo["row"];
  const [stock, setStock] = useState(0);

  useEffect(() => {
    setStock(10);
  }, []);

  function handleRequestCheckOutClick() {
    Swal.fire({
      title: "Requesting the check out...",
      didOpen: () => {
        Swal.showLoading();
      },
    });
    lendBook({
      student_id: idUser,
      book_id: id,
    })
      .then((res) => {
        if (res.success) {
          Swal.fire({
            icon: "success",
            title: "The book is yours!",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: err,
        });
      });
  }

  return (
    <div className="book-details">
      <div className="book-details-details">
        <strong>Id:</strong> {id} <br />
        <strong>Title:</strong> {title} <br />
        <strong>Author:</strong> {author} <br />
        <strong>Genre:</strong> {genre} <br />
        <strong>In stock:</strong> {stock} <br />
      </div>
      <div className="book-details-buttons">
        <Button
          variant="contained"
          color="success"
          onClick={handleRequestCheckOutClick}
        >
          Request the check out
        </Button>
        <Button variant="contained" color="error" onClick={() => Swal.close()}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
