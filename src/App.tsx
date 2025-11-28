import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// @ts-ignore
import Home from "./pages/Home";
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
import Rtx4060 from "./hardware/Rtx4060";
// @ts-ignore
import Rtx4070super from "./hardware/Rtx4070super";
// @ts-ignore
import Rtx4070ti from "./hardware/Rtx4070ti";
// @ts-ignore
import Amd5 from "./hardware/Amd5";
// @ts-ignore
import Rtx5090 from "./hardware/Rtx5090";
// @ts-ignore
import Rtx4090 from "./hardware/Rtx4090";
// @ts-ignore
import Cube21x21 from "./cubes/Cube21x21";
// @ts-ignore
import Been from "./member/Been";
// @ts-ignore
import Thiamjun from "./member/thiamjun";
// @ts-ignore
import Darren from "./member/darren";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Rtx4060" element={<Rtx4060 />}/>
        <Route path="/Rtx4070super" element={<Rtx4070super />}/>
        <Route path="/Rtx4070ti" element={<Rtx4070ti />}/>
        <Route path="/Amd5" element={<Amd5 />}/>
        <Route path="/Rtx5090" element={<Rtx5090 />}/>
        <Route path="/Rtx4090" element={<Rtx4090 />}/>
        <Route path="/Cube21x21" element={<Cube21x21 />}/>
        <Route path="/Been" element={<Been />}/>
        <Route path="/Thiamjun" element={<Thiamjun />}/>
        <Route path="/Darren" element={<Darren />}/>
      </Routes>
    </Router>
  );
};

export default App;
