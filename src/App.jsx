import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import { ToastContainer } from 'react-toastify';
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import { useEffect, useState } from "react";
import Employee from "./pages/Employee";
import Addemployee from "./pages/Addemployee";
import ProtectedRouter from "./components/ProtectedRouter";
import EditEmployee from "./pages/Editemployee";

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(false)

  useEffect(() => {
    let loggedinfo = JSON.parse(localStorage.getItem("isloggedin")) || false;
    setIsLoggedin(loggedinfo);
  }, [])

  return (
    <BrowserRouter>
      <Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setIsLoggedin={setIsLoggedin} />} />
        <Route path="/employee" element={<ProtectedRouter isloggedin={isLoggedin} Component={Employee} />} />
        <Route path="/addemployee" element={<ProtectedRouter isloggedin={isLoggedin} Component={Addemployee} />} />
        <Route path="/edit-employee/:id" element={<ProtectedRouter Component={EditEmployee} />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App