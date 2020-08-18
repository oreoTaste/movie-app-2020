import React from "react";
import { HashRouter, Link } from "react-router-dom";

export default function Navigation() {
  return (
    <HashRouter>
      <ul className="navigation">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </HashRouter>
  );
}
