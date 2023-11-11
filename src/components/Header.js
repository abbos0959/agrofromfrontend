import React from "react";
import { Link } from "react-router-dom";
import LoggedInUser from "./LoggedInUser";
import logos from "../images/mag.jpeg";

const Header = ({ users, user, handleLogout, setFilter }) => {
  return (
    <div
      className={user && user.username === "admin" ? "header admin" : "header"}
    >
      <h1
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/" onClick={() => setFilter(null)}>
          Magic Forum
        </Link>
        <img src={logos} width={30} />
      </h1>
      {user ? (
        <LoggedInUser users={users} user={user} handleLogout={handleLogout} />
      ) : (
        <div>
          <Link to="/login">Log In</Link> / <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
};
export default Header;
