import emailIcon from "../images/email-icon.png";

const MainContent = () => {
  return (
    <main className="main--container">
      <div className="my-credentials">
        <h1 className="my-name">Brad Cole</h1>
        <h3 className="my-title">UX/UI Designer & Front-end Developer</h3>
        {/* <p className="my-website-link">www.bradcoledesign.com</p> */}
        <a
          href="mailto:bradcoledesign@gmail.com?subject=Web%20Design%20Inquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="email-button"
        >
          <img src={emailIcon} className="email-icon" />
          Email
        </a>
      </div>
      <div className="about-info">
        <h2 className="about-heading">About</h2>
        <p>
          I am a skilled UX / UI Designer and can build front-end interfaces
          using technologies such as HTML, CSS, JavaScript and React.
        </p>
      </div>
    </main>
  );
};
export default MainContent;
