import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// @ts-ignore
import Home from "./pages/Home";
// @ts-ignore
import Homeadmin from "./pages/Homeadmin";
// @ts-ignore
import Admin from "./pages/Admin";
// @ts-ignore
import Cart from "./pages/Cart";
// @ts-ignore
import About from "./pages/About";
// @ts-ignore
import Login from "./pages/Login";
// @ts-ignore
import Register from "./pages/Register";
// @ts-ignore
import Contact from "./pages/Contact";
// @ts-ignore
import Profile from "./pages/Profile";
// @ts-ignore
import Product from "./pages/Product";
// @ts-ignore
import Productadmin from "./pages/Productadmin";
// @ts-ignore
import Checkout from "./pages/Checkout";
// @ts-ignore
import Been from "./member/Been";
// @ts-ignore
import Thiamjun from "./member/thiamjun";
// @ts-ignore
import Darren from "./member/darren";
// @ts-ignore
import Zane from "./member/zane";


const App: React.FC = () => {
  useEffect(() => {
    let userId = localStorage.getItem("userId");

    if(!userId){
      userId = "user_" + Date.now();
      localStorage.setItem("userId", userId);
    }
  }, []);

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Homeadmin" element={<Homeadmin/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Profile" element={<Profile/>}/>                                                                                                 
        <Route path="/Product/:id" element={<Product/>}/>
        <Route path="/Productadmin/:id" element={<Productadmin/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route path="/Been" element={<Been/>}/>
        <Route path="/Thiamjun" element={<Thiamjun/>}/>
        <Route path="/Darren" element={<Darren/>}/>
        <Route path="/Zane" element={<Zane/>}/>
      </Routes>
    </Router>
  );
};

export default App;
