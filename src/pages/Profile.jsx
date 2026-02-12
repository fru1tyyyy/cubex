import "../styles/profile.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Profile() {
  const [user, setUser] = useState(null);
  const[selectedFile, setSelectedFile] = useState(null);
  const[uploadMessage, setUploadMessage] = useState("");

const handleUpload = async() => {
  if(!selectedFile) return;

  const formData = new FormData();
  formData.append("picture", selectedFile);

  try{
    const res = await fetch(`http://localhost:5000/api/user/upload/${user.id}`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if(data.picture){
      const updateUser = {...user, picture: data.picture};
      setUser(updateUser);
      localStorage.setItem("user", JSON.stringify(updateUser));
      setUploadMessage("Update Successfully :D");
    }
    else{
      setUploadMessage(data.message || "Upload Failed :(");
    }
  } catch(err){
    console.error(err);
    setUploadMessage(data.message || "Upload Failed D:");
  }

  setSelectedFile(null);
};

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  if (!user) return <p className="loading">Loading profile...</p>;

  const profilePic = user.picture
  ? `http://localhost:5000/upload/${user.picture}?t=${Date.now()}`
  : "/img/default.jpg";

  return (
    <div>
      <Header/>
      <div className="outer-profile">
        <div className="profile-container">
          <div className="profile-card">
            <table>
              <tr>
                <td>
                  <img src={selectedFile ? URL.createObjectURL(selectedFile) : profilePic} alt="profile" className="profile-pfp"/>
                </td>
                <td>
                  <p><strong>Name: </strong>{user.name}</p>
            <p><strong>Email: </strong>{user.email}</p>
            <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])}></input>
            <button onClick={handleUpload}>Upload</button>
            {uploadMessage && <p className="upload-message">{uploadMessage}</p>}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
