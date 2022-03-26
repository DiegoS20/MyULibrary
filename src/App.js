import { Routes, Route } from "react-router-dom";
import Librarian from "./components/Librarian";
import Login from "./components/Login";
import Student from "./components/Student";

import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <main>
      <UserContextProvider>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="student" element={<Student />} />
          <Route path="librarian" element={<Librarian />} />
        </Routes>
      </UserContextProvider>
    </main>
  );
}

export default App;
