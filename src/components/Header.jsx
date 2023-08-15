import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header  = () => {
  return (
    <nav>
      <h1>🍊Orange</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#handles"}>Handles</HashLink>
        <Link to={"/services"}>Services</Link>
        <Link to={"/contact"}>Contect</Link>
      </main>
    </nav>
  );
}

export default Header;