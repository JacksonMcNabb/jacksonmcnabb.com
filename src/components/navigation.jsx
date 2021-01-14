import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
{
  /*<nav className="nav nav-pills flex-column">*/
}
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHeading: "about",
      isLightMode: true,
    };
  }

  componentDidMount() {
    /* Manual Scrollspy Component
    "top" component is now ignored*/

    var orderedSectionNames = [
      "top buffer",
      "about",
      "experience",
      "research",
      "skills",
    ];
    var clientHeights = [0];
    /*Adds consecective heights in easy in clientHeights*/
    for (var i = 1; i < orderedSectionNames.length; i++) {
      clientHeights[i] =
        document.getElementById(orderedSectionNames[i]).clientHeight +
        clientHeights[i - 1];
    }
    document.addEventListener("scroll", () => {
      var currentIndex = 1;
      const offset = 20;
      while (1) {
        if (window.scrollY < clientHeights[currentIndex] - offset) {
          break;
        }
        currentIndex++;
      }
      if (orderedSectionNames[currentIndex] !== this.state.currentHeading) {
        var currentHeading = orderedSectionNames[currentIndex];
        this.setState({ currentHeading });
      }
    });

    // document.addEventListener("click", () => {

    // });
  }
  render() {
    return (
      <aside
        /*A lot of border design options here*/
        /*border-end is nice*/

        className="border-end border-primary rounded-end border-2 max-height"
        id="nav-aside-base"
      >
        {/*Title Component*/}
        <div className="nav-text">
          <header className="nav-titling">
            <a data-text="Jackson McNabb" href="index.html">
              Jackson McNabb
            </a>
          </header>
        </div>
        {/*Socials Component*/}
        <div id="socials-nav">
          <a
            className="mail-icon"
            href="mailto:jacksondmcnabb@gmail.com;jackson.mcnabb@duke.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />{" "}
          </a>
          <a
            className="github-icon"
            href="https://github.com/JacksonMcNabb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} size="lg" />{" "}
          </a>
          {/* <a
            href="https://www.facebook.com/jackson.mcnabb.75/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "facebook-f"]} size="2x" />{" "}
          </a>{" "} */}
          <a
            className="linkedin-icon"
            href="https://www.linkedin.com/in/jdmcnabb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />{" "}
          </a>
          <a
            className="instagram-icon"
            href="https://www.instagram.com/jacksonmcnabb125/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />{" "}
          </a>
        </div>

        {/*Nav Bar Component*/}
        <nav id="navbar-base" role="navigation" className="navbar">
          <div id="navbar">
            <ul>
              <li
                className={
                  this.state.currentHeading === "about" ? "active" : "none"
                }
              >
                <a href="#about" data-nav-section="about">
                  ABOUT ME
                </a>
              </li>
              <li
                className={
                  this.state.currentHeading === "experience" ? "active" : "none"
                }
              >
                <a href="#experience" data-nav-section="experience">
                  EXPERIENCE
                </a>
              </li>
              <li
                className={
                  this.state.currentHeading === "research" ? "active" : "none"
                }
              >
                <a href="#research" data-nav-section="research">
                  RESEARCH
                </a>
              </li>
              <li
                className={
                  this.state.currentHeading === "skills" ? "active" : "none"
                }
              >
                <a href="#skills" data-nav-section="skills">
                  SKILLS
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    );
  }
}