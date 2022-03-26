import { Routes, Route } from "react-router-dom";
import Librarian from "./components/Librarian";
import Login from "./components/Login";
import Student from "./components/Student";

import { UserContextProvider } from "./contexts/UserContext";
import { RequestedBooksContextProvider } from "./contexts/RequestedBooksContext";
import { BooksContextProvider } from "./contexts/BooksContext";

function App() {
  return (
    <main>
      <RequestedBooksContextProvider>
        <UserContextProvider>
          <BooksContextProvider>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="student" element={<Student />} />
              <Route path="librarian" element={<Librarian />} />
            </Routes>
          </BooksContextProvider>
        </UserContextProvider>
      </RequestedBooksContextProvider>
    </main>
  );
}

export default App;
