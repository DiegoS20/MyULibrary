import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import BookDetails from "../BookDetails";

const MySwal = withReactContent(Swal);
export default function DataTable({ columns, rows = [], showDetails }) {
  function handleRowClick(rowData) {
    MySwal.fire({
      html: <BookDetails bookInfo={rowData} />,
      showConfirmButton: false,
    });
  }

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[]}
      onRowClick={showDetails ? handleRowClick : null}
    />
  );
}
