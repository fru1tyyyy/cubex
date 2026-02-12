import "../styles/signup.css"; 
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";

export default function Signup(){
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = "CubeX";
  }, []);

  const saveUser = async (username, email, password) => {
    try{
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name: username, email, password }),
      });

      const data = await res.json();

      if (!res.ok){
        setMessage(data.message);
        return false;
      }
      return true;
    } 
    catch (error) {
      setMessage("Server error, cannot connect");
      return false;
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const username = e.target.username.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const confirmPassword = e.target["confirm-password"].value.trim();

    if (password.length < 6){
      setMessage("At least 6 characters long");
      return;
    }

    if (password !== confirmPassword){
      setMessage("Passwords do not match");
      return;
    }

    const success = await saveUser(username, email, password);

    if (success){
      setMessage("Registered! Redirecting...");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    }
  };

  return(
    <div>
      <header className="header-container">
        <div className="logo">
          <a href="/register"><img src="/img/logo.png" alt="loading" className="header-logo"></img></a>
        </div>
      </header>
      <main className="login-wrapper">
        <div className="brand-box">
          <img src="/img/logo.png" alt="loading" />
          <p>Enjoy fast and secure shopping with CubeX</p>
        </div>
        <div className="login-box">
          <h2>Sign Up</h2>
          <form id="signup-form" onSubmit={handleSignup}>
            <input type="text" name="username" placeholder="Enter your username..." required />
            <input type="email" name="email" placeholder="Enter your email..." required />
            <input type="password" name="password" placeholder="Enter your password..." required />
            <input type="password" name="confirm-password" placeholder="Confirm Password..." required />
            <button type="submit">Sign Up</button>
            <p className="error-message">{message}</p>
          </form>
          <div className="login-links">
            <a href="/login">Already have an account? Log In</a>
          </div>
        </div>
      </main>
    </div>
  );
}
