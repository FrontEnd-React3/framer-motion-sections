import React, { useState } from "react";
import Hamburger from "hamburger-react";
import NavLinks from "./NavLinks";
import "./NavBar.css";
import "./hamburger.css";

const MobileNavigation = () => {
  return (
    <nav className="MobileNavigation">
      <NavLinks />
    </nav>  );
};

export default MobileNavigation;
