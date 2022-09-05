import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom"
import TasksPages from "./pages/TasksPages"
import TaskForm from "./pages/TaskForm"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<TasksPages/>}/>
        <Route path="/new" element={<TaskForm/>}/>
        <Route path="/edit/:id" element={<TaskForm/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
