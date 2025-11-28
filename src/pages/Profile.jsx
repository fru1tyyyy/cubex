import "../assets/styles/profile.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  if (!user) return <p className="loading">Loading profile...</p>;

  return (
    <div>
      <Header/>
      <div className="profile-container">
        <div className="profile-card">
          <h2>{user.name} Profile</h2>
          <p><strong>Email: </strong>{user.email}</p>
          <p><strong>Name: </strong>{user.name}</p>
        </div>
      </div>
    </div>
  );
}
