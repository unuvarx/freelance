import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-informations">
        <div>
          <h5>Sefa Ünüvar - Full Stack Developer</h5>
        </div>
        
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/sefa-unuvar">
            
            <LinkedInIcon className="icon" />
          </a>
          <a href="https://github.com/unuvarx">
            <GitHubIcon className="icon" />
          </a>
          <a href="https://www.instagram.com/unuvarx/">

          <InstagramIcon className="icon" />
          </a>
        </div>
      </div>
      <div className="footer-hr">
        <div>
          <Link to="home"> Anasayfa </Link>
          <Link to="about"> Hakkımda </Link>
          <Link to="contact"> İletişim </Link>
        </div>
        <hr />
      </div>
      <div className="footer-rights-reserved">
        <h3>© 2023 Sefa Ünüvar | Her Hakkı Saklıdır.</h3>
      </div>
    </div>
  );
}
