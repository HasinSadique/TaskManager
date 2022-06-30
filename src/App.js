import { Route, Routes } from "react-router";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import CompletedTasks from "./components/CompletedTasks/CompletedTasks";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ToDo from "./components/ToDO/ToDo";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="completedTasks" element={<CompletedTasks />} />
        <Route path="to-do" element={<ToDo />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
