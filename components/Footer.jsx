import gitIcon from "../images/github.png";
import fbIcon from "../images/facebook.png";
import instaIcon from "../images/instagram.png";
import linkedInIcon from "../images/linkedin.png";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/artwired" target="_blank" rel="noreferrer">
        <img src={gitIcon} className="social-icons" />
      </a>
      <a
        href="https://www.facebook.com/bradcolewebsitedesign/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={fbIcon} className="social-icons" />
      </a>
      <a
        href="https://www.instagram.com/brad_cole_design/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instaIcon} className="social-icons" />
      </a>
      <a
        href="https://www.linkedin.com/in/bradcoleideas/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedInIcon} className="social-icons" />
      </a>
    </footer>
  );
};
export default Footer;
