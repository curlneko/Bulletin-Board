import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faNoteSticky,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        Home
      </Link>

      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faRightFromBracket} />
          Login
        </Link>
      ) : (
        <>
          <Link to="/createpost">
            <FontAwesomeIcon icon={faNoteSticky} />
            Post
          </Link>
          <Link to="/logout">
            <FontAwesomeIcon icon={faRightFromBracket} />
            Logout
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
