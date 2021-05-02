import "./NavBar.css";
import React, { useState } from "react";

import Hamburger from "hamburger-react";
import { motion } from "framer-motion";
// https://www.framer.com/api/animation/#spring.stiffness
const NavLinks = props => {
  const animateFrom = { Opacity: 0, x: -1000 };
  const animateTo = { Opacity: 1, x: 0 };
  const [open, setOpen] = React.useState(false);
  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="NavBar">
      <div
        className="Hamburger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Hamburger />
      </div>
      <ul className={open ? "open" : !open}>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{
            duration: 1,
            delay: 0.05,
            type: "spring",
            stiffness: 39
          }}
          onClick={
            (() => {
              setOpen(!open);
            }
            )
          }
        >
          <a href="#">Home</a>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{
            duration: 1,
            delay: 0.35,
            type: "spring",
            stiffness: 39
          }}
          onClick={
            (() => {
              setOpen(!open);
            }
            )
          }        >
          <a href="/#about">About Me</a>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{
            duration: 1,
            delay: 0.65,
            type: "spring",
            stiffness: 39
          }}
          onClick={
            (() => {
              setOpen(!open);
            }
            )
          }        >
          <a href="/#skills">Skills</a>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{
            duration: 1,
            delay: 0.95,
            type: "spring",
            stiffness: 39
          }}
          onClick={
            (() => {
              setOpen(!open);
            }
            )
          }        >
          <a href="/#mailme">Mail me</a>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{
            duration: 1,
            delay: 1.25,
            type: "tween",
            stiffness: 39
          }}
          onClick={
            (() => {
              setOpen(!open);
            }
            )
          }        >
          <a href="/#footer">Footer</a>
        </motion.li>
      </ul>
    </nav>
  );
};

export default NavLinks;
