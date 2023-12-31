import React from "react";
import { Link } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <>
      {user ? (
        <div className="center">
          <p>Welcome to forum!</p>
        </div>
      ) : (
        <div className="center">
          <p>
            Please <Link to="/login">login</Link> or{" "}
            <Link to="/register">register</Link> to join forum
          </p>
        </div>
      )}
    </>
  );
};

export default Home;
