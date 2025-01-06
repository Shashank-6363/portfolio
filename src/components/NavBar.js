import "./NavBar.css";
import shashankImage from "./shashank.png";

function NavBar() {
  return (
    <>
    <div className="custom-container">
      <div className="navbar">
        <div className="setImage">
          <img src={shashankImage} alt="shashank" />
          <h1>
            Shashan<span>k</span>
            <p>Web Developer</p>
          </h1>
        </div>
        <div className="aboutSession">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Experiance</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
export default NavBar;
