import React from "react";
import { Link } from "react-router-dom";
import leetLogo from "./assets/leetcode_logo.svg";
import "./explorePage.css";

const ExplorePage = () => {
  return (
    <div id="explorePage" className="min-h-screen w-full bg-red-500">
      <div id="explore-hero">
        <h1>leetcode</h1>
        <Link to={"/signup"}>
          <button id="home-btn"><b>Get Started</b></button>
        </Link>
      </div>
    </div>
  );
};

export default ExplorePage;
