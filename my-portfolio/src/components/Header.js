import React, { useState, useEffect } from 'react';
import '../Css/Header.css';  // Import CSS for styling
import logo from '../Assets/image.png';
import github from '../Assets/Git.png'; // Correct GitHub image
import whatsapp from '../Assets/Whatsapp.png'; // Correct WhatsApp image
import linkedin from '../Assets/Linkedin.png'; // Correct LinkedIn image
import sql from '../Assets/Sql.png';
import me from '../Assets/me.png';
import linechart from '../Assets/Linechart.png';
import python from '../Assets/Python.png'


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const [hideMouse, setHideMouse] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setShowLogo(false);
        setHideMouse(true);
      } else {
        setIsScrolled(false);
        setShowLogo(true);
        setHideMouse(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="body">
      {/* Header Section */}
      <header className={isScrolled ? 'scrolled' : ''}>
        {showLogo ? (
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        ) : (
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        )}
      </header>

      {/* Home Section */}
      <div id="home" className="section">
        <div className="Head-text-home">
          <h2>I AM</h2>
          <h1>VIGNESH</h1>
          <p>A Data Science student and Data Analyst skilled in data analysis, machine learning,<br /> and visualization to drive actionable insights and strategic decisions.</p>
        </div>

        {/* Social Media Icons */}
        <div className="social-buttons">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="circle-btn github">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://wa.me/your-whatsapp" target="_blank" rel="noopener noreferrer" className="circle-btn whatsapp">
            <img src={whatsapp} alt="WhatsApp" />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="circle-btn linkedin">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
        <div className={`mouse ${hideMouse ? 'hidden' : ''}`}></div>
      </div>

      {/* Other Sections */}
      <div id="about" className="section">
  <h2 className="about-heading">About Me</h2>
  
  <div className="about-container">
    
    {/* Left Side (Large Image) */}
    <div className="about-left">
      <img src={me} alt="About Me" />
    </div>

    {/* Right Side (Grid Structure) */}
    <div className="about-right">

      {/* Top Large Box */}
      <div className="top-box">
       <img src={linechart} alt="Profile" />
      </div>

      {/* Two Smaller Boxes Side-by-Side */}
      <div className="bottom-boxes">
  
  {/* Card 1 */}
  <div className="feature-card">
    <div className="icon-container">
      <img src={python} alt="UI/UX" />
    </div>
    <h3>Python</h3>
    <p>Responsive, user-focused website experience.</p>
  </div>

  {/* Card 2 */}
  <div className="feature-card">
    <div className="icon-container2">
      <img src={sql} alt="SEO Visibility" />
    </div>
    <h3>MySQL</h3>
    <p>Engaging, SEO-optimized, trust-building content.</p>
  </div>

</div>


      {/* Text Description */}
      <div className="about-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Button */}
      <div className="about-button">
        <button>MORE</button>
      </div>

    </div>
  </div>
</div>


      <div id="projects" className="section">
        <h1>My Projects</h1>
        <ul>
          <li>Project 1: A weather app built with React</li>
          <li>Project 2: A to-do list app with hooks</li>
          <li>Project 3: A portfolio website</li>
        </ul>
      </div>

      <div id="contact" className="section">
        <h1>Contact Me</h1>
        <p>Feel free to reach out if you have any questions or want to collaborate!</p>
      </div>
    </div>
  );
};

export default Header;
