import "../styles/login.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";

export default function Login(){
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = "CubeX";
  }, []);

  const loginUser = async(email, password) => {
    try{
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password}),
      });

      const data = await res.json();

      if(!res.ok){
        setMessage(data.message);
        return false;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("userId", data.user.id);
      return true;
    }
    catch(err){
      setMessage("Server cant be connected");
      return false;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    const success = await loginUser(email, password);

    if (success){
      setMessage("");
      window.location.href = "/home";
    } 
    else{
      setMessage("Invalid email or password.");
    }
  };

  return(
    <div>
      <header className="header-container">
        <div className="logo">
          <a href="/login"><img src="/img/logo.png" alt="loading" className="header-logo"></img></a>
        </div>
      </header>
      <main className="login-wrapper">
        <div className="brand-box">
          <img src="/img/logo.png" alt="loading"></img>
          <p>Enjoy fast and secure shopping with CubeX</p>
        </div>
        <div className="login-box">
          <h2>Login</h2>
          <form id="login-form" onSubmit={handleLogin}>
            <input type="email" name="email" placeholder="Enter your email..." required />
            <input type="password" name="password" placeholder="Enter your password..." required />
            <button type="submit">Log In</button>
            <p className="error-message">{message}</p>
          </form>
          <div className="login-links">
            <a href="/register">Don't have an account? Sign Up</a><br></br>
          </div>
        </div>
      </main>
    </div>
  );
}
