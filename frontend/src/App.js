import styles from "./App.module.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
