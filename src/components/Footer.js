import React from "react";

import socialLinks from "../data/socialLinks.json";

const Footer = () => (
  <footer>
    <ul className="horizontalList defaultListStyle">
      <li>About</li>
      {socialLinks.map((link, i) => (
        <SocialLink {...link} key={i} />
      ))}
      <li>© {new Date().getFullYear()} Fredrik Palmquist</li>
    </ul>
  </footer>
);

const SocialLink = ({ img, alt, href, label }) => (
  <li>
    <i>
      <img className="companyIcon" src={img} alt={alt} />
    </i>
    <a href={href}>{label}</a>
  </li>
);

export default Footer;
