import { useState, useEffect } from "react";
import DataTable from "../DataTable";

import "./index.scss";
import booksColumns from "./booksTableColumns.json";

export default function BooksDataTable({ title, data = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("title");
  const [queryResult, setQueryResult] = useState([]);

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
      <DataTable columns={booksColumns} rows={queryResult}></DataTable>
    </div>
  );
}
