import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:px-[100px] px-[20px] font-[Menlo] text-[18px]">
        <div className="mb-4 sm:mb-0">
            <Link to={`/`}>
            <h1 className="text-[20px] font-[700]">
                Shashi Ranjan Singh
            </h1>
            </Link>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-10 sm:mr-35 text-left sm:text-right">
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
            
            <Link to={`/resume`}>
            <h2>
                Resume
            </h2>
            </Link>
      
        </div>
        <div>
            <h3></h3>
        </div>
      </div>
    </>
  );
};

export default Navbar;
