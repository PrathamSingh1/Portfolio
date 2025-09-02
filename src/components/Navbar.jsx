import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div>
            <Link to={`/`}>
            <h1>
                Shashi Ranjan Singh
            </h1>
            </Link>
        </div>
        <div className="flex items-center gap-10">
            <Link to={`/about`}>
            <h2>
                About
            </h2>
            </Link>
            <Link to={`/projects`}>
            <h2>
                Projects
            </h2>
            </Link>
            <Link to={`/contact`}>
            <h2>
                Contact Me
            </h2>
            </Link>
        </div>
        <div>
            <h3>Hello</h3>
        </div>
      </div>
    </>
  );
};

export default Navbar;
