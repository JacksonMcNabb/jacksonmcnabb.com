import React, { Component } from "react";

let siteText = require("./data/site-text.json");

export default class About extends Component {
  render() {
    return (
      <p className="section-body about-section base-section padded" id="about">
        {siteText["About"]}
        <span>
          <a href={"mailto:" + siteText["Email"]}>Contact me</a> about some of
          my <a href="#experience">projects</a> or{" "}
          <a href="#research">research</a>!
        </span>
      </p>
    );
  }
}
