import React, { useEffect, useRef } from "react";
import "../Css/About.css";
import photo from "../Assets/me.png";
import github from "../Assets/Git.png";
import sql from "../Assets/Sql.png";
import Dataanalysis from "../Assets/About-data.png";
import python from "../Assets/Python.png";
import MLicon from "../Assets/ML-icon.png";
import dataa from "../Assets/Data-analysis.png";
import Excel from "../Assets/Excel.png";
import Frontend from "../Assets/Front-end.png";
import vscode from "../Assets/Vscode.png";
import powerbi from "../Assets/Powerbi.png";

const AboutPage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const c = canvasRef.current;
    const $ = c.getContext("2d");

    const lines = [
      "2020 - 2023",
      "Graduated with a Bachelor's degree in Computer Science.",
      "These years laid the foundation for my technical mindset,",
      "teaching me logic, programming, and problem-solving at scale.",
      "",
      "",
      "2024 - 2025",
      "Currently pursuing a Postgraduate Program in Data Science and AI",
      "from IIT Bangalore, in collaboration with upGrad.",
      "I'm diving deep into ML, Python, and real-world projects,",
      "bridging theory with industry-ready skills.",
      "",
      "",
      "2025 - 2026",
      "Enrolled in an MSc in Data Science & AI with LJMU (UK), via upGrad.",
      "This program sharpens my research capabilities,",
      "and explores applied AI at a global level.",
      "",
      "",
      "Each year, each course, and each project has brought me closer",
      "to becoming a confident, impactful data scientist.",
      "And this canvas? It’s more than just text —",
      "it’s a snapshot of the journey I’m proud to be on.",
    ];

    const headers = ["2020 - 2023", "2024 - 2025", "2025 - 2026"];
    let x = 0;
    let y = 0;

    c.width = window.innerWidth;
    c.height = window.innerHeight;
    $.textBaseline = "top";

    const lineHeight = 35;

    function resume() {
      $.clearRect(0, 0, c.width, c.height);
      $.fillStyle = "#0a0a1f";
      $.fillRect(0, 0, c.width, c.height);
      $.globalCompositeOperation = "lighter";

      lines.forEach((line, i) => {
        if (i <= y) {
          const text = i === y ? line.substring(0, x) : line;
          const isHeader = headers.includes(line);

          $.font = isHeader
            ? "bold 2rem 'Venite', Arial"
            : "1.2rem 'Venite', Arial";
          $.shadowColor = "#0a0a1f";
          $.fillStyle = isHeader ? "#8447ff" : "#ffffff";
          const centerX = (c.width - $.measureText(line).width) / 2;
          $.fillText(text, centerX, 100 + i * lineHeight);
        }
      });

      if (lines[y] && lines[y] !== "") {
        const currentLine = lines[y].substring(0, x);
        const totalLineWidth = $.measureText(lines[y]).width;
        const currentTextWidth = $.measureText(currentLine).width;
        const centerX = (c.width - totalLineWidth) / 2;

        $.fillStyle = "#00ff88";
        $.fillRect(centerX + currentTextWidth, 102 + y * lineHeight, 2, 18);
      }

      x++;
      if (x >= (lines[y]?.length || 0)) {
        y++;
        x = 0;
      }

      if (y < lines.length) {
        setTimeout(() => requestAnimationFrame(resume), 10);
      }
    }

    resume();
  }, []);

  const logos = [
    python,
    MLicon,
    Dataanalysis,
    dataa,
    Excel,
    powerbi,
    Frontend,
    vscode,
    sql,
    github,
    python,
    MLicon,
    Dataanalysis,
    dataa,
    Excel,
    powerbi,
    Frontend,
    vscode,
    sql,
  ];

  return (
    <div className="body">
      <div className="First-page">
        <div className="First-page-container">
          <div className="right">
            <h1>HEY..</h1>
            <div className="about-text">
              <p>
                I’m a Data Science enthusiast who doesn’t just crunch numbers-- I bring them to life with code, creativity, and a deep curiosity for how things work behind the screen.
              </p>
              <p>
                Whether it's predicting the next big trend or building clean, immersive dashboards, I combine logic with visual storytelling to make data not just readable -- but unforgettable.
              </p>
              <p>
                With a passion for both tech and gaming, I design digital experiences that feel more like quests than pages. I’m fluent in Python, skilled with machine learning tools, and always up for a new challenge that levels up my craft.
              </p>
              <p>This portfolio? It’s not just a website. It’s my arena.</p>
            </div>
          </div>
          <div className="left">
            <img src={photo} alt="Me" />
          </div>
        </div>

        <div className="container">
          <a href="#extra-info" className="hide-on-palm arrow-down">
            <span className="fa-stack fa-2x">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-chevron-down fa-stack-1x"></i>
            </span>
          </a>
        </div>
      </div>

      <div className="Second-page">
        <canvas id="oldSkool" ref={canvasRef}></canvas>

        <div className="logo-carousel">
          <div className="carousel-track">
            {[...logos, ...logos].map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;