import { DataGrid } from "@mui/x-data-grid";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import BookDetails from "../BookDetails";
import useUserInfo from "../../hooks/useUserInfo";
import getBookStock from "../../services/getBookStock";

const MySwal = withReactContent(Swal);
export default function DataTable({ columns, rows = [], showDetails }) {
  const { user } = useUserInfo();

  function handleRowClick(rowData) {
    getBookStock(rowData.row.id).then((res) => {
      MySwal.fire({
        html: (
          <BookDetails
            bookInfo={rowData}
            idUser={user["id"]}
            bookStock={res.stock}
            onBookRequested={handleBookRequested}
          />
        ),
        showConfirmButton: false,
      });
    });
  }

  function handleBookRequested() {}

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
