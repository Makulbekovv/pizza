import React from "react";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import '../styles/Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram />
        <Twitter/>
        <Facebook/>
        <LinkedIn/>
      </div>
      <p>&copy; 2021 pedrotechpizza.com</p>
    </div>
  );
};

export default Footer;
