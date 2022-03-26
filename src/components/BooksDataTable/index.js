import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import DataTable from "../DataTable";
import AddBookForm from "../AddBookForm";
import useBooks from "../../hooks/useBooks";

import "./index.scss";
import booksColumns from "./booksTableColumns.json";

const mySwal = withReactContent(Swal);
export default function BooksDataTable({
  title,
  data = [],
  showDetails,
  addBooks,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("title");
  const [queryResult, setQueryResult] = useState([]);
  const { updateBooksList } = useBooks();

  //#region useEffects
  useEffect(() => {
    if (searchQuery === "") {
      setQueryResult(data);
      return;
    }
    const result = data.filter(
      (val) => val[filterOption].indexOf(searchQuery) > -1
    );
    setQueryResult(result);
  }, [data, searchQuery, filterOption]);
  //#endregion

  //#region handlers
  function handleAddNewBookClick() {
    mySwal.fire({
      html: <AddBookForm onBookAdded={() => updateBooksList()} />,
      showConfirmButton: false,
    });
  }
  //#endregion

  return (
    <div className="books-data-table">
      <h4 className="book-table-title">{title}</h4>
      <div className="book-search-engine">
        <div className="book-filter">
          <input
            type="search"
            placeholder="Write here what you are searching for"
            value={searchQuery}
            className="search-query"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          filter by {""}
          <select
            className="filter-options"
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="title">Book Title</option>
            <option value="author">Book Author</option>
            <option value="genre">Book Genre</option>
          </select>
        </div>
        {addBooks && (
          <div className="book-add-btn">
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddNewBookClick}
            >
              Add new book
            </Button>
          </div>
        )}
      </div>
      {showDetails && (
        <div className="book-details-instructions">
          Click on the row to see the book details
        </div>
      )}
      <DataTable
        columns={booksColumns}
        rows={queryResult}
        showDetails={showDetails}
      ></DataTable>
    </div>
  );
}
