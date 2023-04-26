import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Category from "./components/Category";
import Home from "./components/Home";

function App({ search }) {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/general" element={<NewsList cat="general" />} />
          <Route exact path="/business" element={<NewsList cat="business" />} />
          <Route
            exact
            path="/enterntainment"
            element={<NewsList cat="enterntainment" />}
          />
          <Route exact path="/health" element={<NewsList cat="health" />} />
          <Route exact path="/science" element={<NewsList cat="science" />} />
          <Route exact path="/sports" element={<NewsList cat="sports" />} />
          <Route
            exact
            path="/technology"
            element={<NewsList cat="technology" />}
          />
        </Routes>
      </Router>
    </>
  );
}

//a5ff41a6c0f24b40ab246ed45ab6ad2c

export default App;
