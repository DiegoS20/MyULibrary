import { Routes, Route } from "react-router-dom";
import Librarian from "./components/Librarian";
import Login from "./components/Login";
import Student from "./components/Student";

function App() {
  return (
    <main>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="student" element={<Student />} />
        <Route path="librarian" element={<Librarian />} />
      </Routes>
    </main>
  );
}

export default App;
