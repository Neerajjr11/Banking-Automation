import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { Routes, Route, Link } from "react-router-dom";
import Signup from './Pages/Signup';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
