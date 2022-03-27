import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import getAllBookRequested from "../../services/getAllBooksRequested";
import returnBook from "../../services/returnBook";

import "./index.scss";
import columns from "./booksTableColumns.json";

export default function RequestedBooksTable() {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [selectedRow, setSelectedRow] = useState([]);
  const [books, setBooks] = useState([]);
  const [resultBooks, setResultBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    retrieveAllBookRequested();
  }, []);

  useEffect(() => {
    if (searchInput === "") {
      setResultBooks(books);
      return;
    }
    const filtered = books.filter(
      (val) => val.student.indexOf(searchInput) > -1
    );
    setResultBooks(filtered);
  }, [searchInput, books]);

  function handleReturnBookClick() {
    Swal.fire({
      icon: "question",
      title: "Are you sure to return this book?",
      confirmButtonColor: "green",
      showCancelButton: true,
      cancelButtonColor: "red",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.showLoading();
        returnBook(selectedRow.id, selectedRow.book).then((res) => {
          if (res.success) {
            Swal.fire({
              icon: "success",
              title: "Book returned!",
            });
            retrieveAllBookRequested();
          }
        });
      }
    });
  }

  function handleRowClick(rowData) {
    setBtnDisabled(false);
    setSelectedRow(rowData.row);
  }

  function retrieveAllBookRequested() {
    getAllBookRequested().then((res) => {
      if (res.success) {
        setBooks(res.books);
        setResultBooks(res.books);
      }
    });
  }

  return (
    <div className="requested-books-table">
      <div className="requested-books-title-btn">
        <div className="requested-books-title">Requested books</div>
        <div className="requested-books-add">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleReturnBookClick}
            disabled={btnDisabled}
          >
            Return book
          </Button>
        </div>
      </div>
      <div className="requested-books-search">
        <input
          type="search"
          placeholder="Write here the name you are looking for"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <DataGrid
        rows={resultBooks}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[]}
        onRowClick={handleRowClick}
      />
    </div>
  );
}
