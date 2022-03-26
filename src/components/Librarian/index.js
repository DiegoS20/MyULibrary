import BooksDataTable from "../BooksDataTable";

export default function Librarian() {
  return (
    <div className="librarian">
      <BooksDataTable title="Books" data={[]} showDetails addBooks />
    </div>
  );
}
