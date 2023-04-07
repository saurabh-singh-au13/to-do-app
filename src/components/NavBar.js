import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./NavBar.css";

const NavBar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
console.log(isAuthenticated)
console.log(loginWithRedirect)
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <span className="navbar-text">To-Do App</span>
        </div>
        {isAuthenticated ? (
          <>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <div className="container-2">
              <span onClick={() => loginWithRedirect()} className="login">
                Login
              </span>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default NavBar;
