import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  const pageSize = 15;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<News pageSize={pageSize} country="in" category="general" />}
        />
        <Route
          path="/Business"
          element={
            <News pageSize={pageSize} country="in" category="business" />
          }
        />
        <Route
          path="/Entertainment"
          element={
            <News pageSize={pageSize} country="in" category="entertainment" />
          }
        />
        <Route
          path="/Science"
          element={<News pageSize={pageSize} country="in" category="science" />}
        />
        <Route
          path="/Health"
          element={<News pageSize={pageSize} country="in" category="health" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
