/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../Css/Header.css"; // Import CSS for styling
import github from "../Assets/Git.png";
import whatsapp from "../Assets/Whatsapp.png";
import linkedin from "../Assets/Linkedin.png";
import sql from "../Assets/Sql.png";
import Dataanalysis from "../Assets/About-data.png";
import python from "../Assets/Python.png";
import python1 from "../Assets/python1.png";
import python2 from "../Assets/Python2.png";
import python3 from "../Assets/Python3.png";
import python4 from "../Assets/Python4.png";
import MLicon from "../Assets/ML-icon.png";
import dataa from "../Assets/Data-analysis.png";
import Excel from "../Assets/Excel.png"
import Frontend from "../Assets/Front-end.png"
import vscode from "../Assets/Vscode.png"
import powerbi from "../Assets/Powerbi.png"
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutTab, setAboutTab] = useState("skills");
  const [projectTab, setProjectTab] = useState("Python");
 // Default to "skills"
   // 🔥 New state for skills toggle

  const Python = [
    {
      image: python1,
      title: 'Project One',
      description: 'This is project one.',
    },
    {
      image: python2,
      title: 'Project Two',
      description: 'This is project two.',
    },
    {
      image: python3,
      title: 'Project Three',
      description: 'This is project three.',
    },
    {
      image: python4,
      title: 'Project Four',
      description: 'This is project four.',
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setIsScrolled(isScrolled);
    };

   
  

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="body">
      {/* Header Section */}
      <header className={isScrolled ? "scrolled" : ""}>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
      </header>
      <div id="home" className="hero-background">
        <div id="Header">
        <h2>I AM</h2>
        </div>
        <h1>VIGNESH</h1>
        <p>
            A Data Science student and Data Analyst skilled in data analysis, <br></br>
            machine learning, and visualization to drive actionable insights 
            and strategic decisions.
          </p>
          <div class="image">
            <svg class="bg-pattern" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,100 Q50,0 100,100" fill="none" stroke="#ffffff0a" stroke-width="1" />
              </svg>
              </div>

              {/* Social Media Icons */}
        <div className="social-buttons">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="circle-btn">
            <img src={github} alt="GitHub" /> 
            <div id="Icons">
              <h2>GitHub</h2>
              </div>
          </a>
          <a href="https://wa.me/your-whatsapp" target="_blank" rel="noopener noreferrer" className="circle-btn">
            <img src={whatsapp} alt="WhatsApp" />
            <div id="Icons">
              <h2>WhatsApp</h2>
              </div>
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="circle-btn">
            <img src={linkedin} alt="LinkedIn" />
            <div id="Icons">
              <h2>LinkedIn</h2>
              </div>
          </a>
        </div>
        <div class="mouse_scroll">

		<div class="mouse">
			<div class="wheel"></div>
		</div>
		<div>
			<span class="m_scroll_arrows unu"></span>
			<span class="m_scroll_arrows doi"></span>
      <span class="m_scroll_arrows doi"></span>
		</div>
</div>
        </div>




        {/* // -----------------------------------About------------------------------------------ */}
        <div id="about" >
          <div class="About">
          <div class="text">
        <div class="Text-area">
          <h1>About</h1>
          <br></br>
        
          <p>
                I specialize in Data Science, Machine Learning, and Database 
                Management, with expertise in Python, MySQL, Power BI, and 
                Looker Studio for data analysis, visualization, and automation. 
                Hands-on experience in Scikit-learn, TensorFlow, and API <t></t>
                integration allows me to build predictive models and interactive 
                dashboards for data-driven decisions.
              </p>
             </div>
             <div className="toggle-switch">
            <div className={`toggle-btn ${aboutTab === "skills" ? "active" : ""}`}
              onClick={() => setAboutTab("skills")}
            >
              Skills
            </div>
            <div className={`toggle-btn ${aboutTab === "tools" ? "active" : ""}`}
              onClick={() => setAboutTab("tools")}
            >
              Tools
            </div>
          </div>
             <div className="skills-box">
  {aboutTab === "skills" && (
    <div>
      <h3>Skills</h3>
      <div className="skills-grid">
        <div className="skill">
          <img src={python} alt="Python" />
          <span>Python</span>
        </div>
        <div className="skill">
          <img src={sql} alt="SQL" />
          <span>SQL</span>
        </div>
        <div className="skill">
          <img src={MLicon} alt="Machine Learning" />
          <span>Machine Learning</span>
        </div>
        <div className="skill">
          <img src={dataa} alt="Data Analysis" />
          <span>Data Analysis</span>
        </div>
        <div className="skill">
          <img src={Excel} alt="Data Analysis" />
          <span>Excel</span>
        </div>
        <div className="skill">
          <img src={Frontend} alt="Data Analysis" />
          <span>Frontend</span>
        </div>
      </div>
    </div>
  )}

  {aboutTab === "tools" && (
    <div>
      <h3>Tools</h3>
      <div className="skills-grid">
        <div className="skill">
          <img src={powerbi} alt="Power BI" />
          <span>Power BI</span>
        </div>
        <div className="skill">
          <img src="looker.png" alt="Looker Studio" />
          <span>Looker Studio</span>
        </div>
        <div className="skill">
          <img src="tableau.png" alt="Tableau" />
          <span>Tableau</span>
        </div>
        <div className="skill">
          <img src="jupyter.png" alt="Jupyter Notebook" />
          <span>Jupyter Notebook</span>
        </div>
        <div className="skill">
          <img src={vscode} alt="Jupyter Notebook" />
          <span>Vscode</span>
        </div>
        <div className="skill">
          <img src={vscode} alt="Jupyter Notebook" />
          <span>Vscode</span>
        </div>
      </div>
    </div>
  )}
</div>
</div>
<div class="image">
        <img src={Dataanalysis} alt=""></img>

        </div>
  
        </div >
        <div className="hello-wrapper">
        <Link to="/about">
  <button className="hello-btn">Click Here <span className="arrow">→</span></button>
  </Link>
  <div>
  <h3>TO KNOWN MORE</h3>
  </div>
</div>
</div>

{/* -------------------------------------projects--------------------------------------- */}
<div id="projects"class="Projects">
  <h1>PROJECTS</h1>
  <div className="Project-toggle-switch">
            <div className={`project-toggle-btn ${projectTab === "Python" ? "active" : ""}`}
              onClick={() => setProjectTab("Python")}
            >
              Python
            </div>
            <div className={`project-toggle-btn ${projectTab === "Sql" ? "active" : ""}`}
              onClick={() => setProjectTab("Sql")}
            >
              Sql
            </div>
            <div className={`project-toggle-btn ${projectTab === "dashboards" ? "active" : ""}`}
              onClick={() => setProjectTab("dashboards")}
            >
              dashboards
            </div>
          </div>
         
          {projectTab === "Python" && (
          <div className="custom-project-grid">
      {Python.map((Python, index) => (
        <div key={index} className="project-box">
          <h3 className="project-title">{Python.title}</h3>
          <div className="project-image-container">
            <img src={Python.image} alt={Python.title} className="project-image" />
            <div className="project-overlay">
              <p>{Python.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
          )
        }


</div>

{/* ----------------------------------------------------_Contact----------------------------------------------------------------- */}

<div id="contact"class="contact">
        <div className="contact-container">
          <div className="contact-left">
            <h1>just <br /> send it.</h1>
            <p>You don’t like forms?</p>
            <p>Looking to do great work?</p>
            <div className="contact-buttons">
              <a href="mailto:Vignesh.vm1912@gmail.com" className="contact-btn">✉️ Email Me</a>
              <a href="https://www.linkedin.com/in/your-linkedin" className="contact-btn">🚀 LinkedIn</a>
            </div>
          </div>

          <div className="contact-right">
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <textarea placeholder="Your message" rows={4} required style={{ resize: 'none', width: '720px', height: '100px' }}></textarea>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
        </div>

  </div>

 

  );
};

export default Header;