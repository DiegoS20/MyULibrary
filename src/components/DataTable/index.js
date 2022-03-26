import { DataGrid } from "@mui/x-data-grid";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import BookDetails from "../BookDetails";
import useUserInfo from "../../hooks/useUserInfo";

const MySwal = withReactContent(Swal);
export default function DataTable({ columns, rows = [], showDetails }) {
  const { user } = useUserInfo();

  function handleRowClick(rowData) {
    MySwal.fire({
      html: <BookDetails bookInfo={rowData} idUser={user["id"]} />,
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
