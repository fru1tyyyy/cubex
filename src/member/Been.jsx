import "../styles/member.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";
import Header from "../components/Header";

export default function Member() {
  useEffect(() => {
    document.title = "CubeX";
  }, []);

  return (
    <div>
      <Header/>
      <main className="container">
        <div className="profile">
          <img src="/img/been2.jpg" alt="pfp" className="pfp"/>
          <div className="info">
            <div className="info-left">
              <h2>Name: </h2>
              <p>Yu Been</p>
            </div>
            <div className="info-section">
              <h2>Role: </h2>
              <p>Full Stack Developer</p>
            </div>
            <div className="info-section">
              <h2>Education: </h2>
              <p>Bachelor in Software Engineering</p>
            </div>
          </div>
          <div className="info-left">
            <h2>About: </h2>
            <p>A self taught and hardworking Software Engineering student with a
              strong passion for coding and problem-solving.</p>
          </div>
          <div className="info-left">
            <h2>Skills: </h2>
            <div className="skills">
              <ul className="skills-list">
                <li className="skill-card">
                  <strong>Python</strong>
                  <br/>
                  <small>Language</small>
                </li>
                <li className="skill-card">
                  <strong>JavaScript</strong>
                  <br/>
                  <small>Language</small>
                </li>
                <li className="skill-card">
                  <strong>React</strong>
                  <br />
                  <small>Library</small>
                </li>
                <li className="skill-card">
                  <strong>Java</strong>
                  <br/>
                  <small>Language</small>
                </li>
                <li className="skill-card">
                  <strong>C#</strong>
                  <br/>
                  <small>Language</small>
                </li>
                <li className="skill-card">
                  <strong>PHP</strong>
                  <br/>
                  <small>Language</small>
                </li>
                <li className="skill-card">
                  <strong>TypeScript</strong>
                  <br/>
                  <small>Language</small>
                </li>
                <li className="skill-card">
                  <strong>CSS</strong>
                  <br/>
                  <small>CSS</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2025 Our Project Team</p>
      </footer>
    </div>
  );
}
