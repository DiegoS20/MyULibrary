import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
