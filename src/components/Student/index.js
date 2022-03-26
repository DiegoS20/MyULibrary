import BooksDataTable from "../BooksDataTable";

import "./index.scss";

const falseRows = [
  { id: 1, title: "La Biblia", author: "Dios", genre: "Figuras literarias" },
  {
    id: 2,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    genre: "Un loco",
  },
];

export default function Student() {
  return (
    <div className="student">
      <h1 className="main-title">Hello back, {"{{Username}}"}</h1>
      <BooksDataTable title="Books requested" data={falseRows} />
      <div style={{ height: "100px" }} className="blank_space"></div>
      <BooksDataTable title="Books available" data={falseRows} showDetails />
    </div>
  );
}
