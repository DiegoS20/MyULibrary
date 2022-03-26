import { useState, useEffect } from "react";
import DataTable from "../DataTable";

import "./index.scss";
import booksColumns from "./booksTableColumns.json";

export default function BooksDataTable({ title, data = [], showDetails }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("title");
  const [queryResult, setQueryResult] = useState([]);

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

  return (
    <div className="books-data-table">
      <h4 className="book-table-title">{title}</h4>
      <div className="book-search-engine">
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
