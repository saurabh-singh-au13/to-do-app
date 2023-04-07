import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./NavBar.css";

const NavBar = () => {
  const { user, loginWithRedirect, logout, isLoading, isAuthenticated } =
    useAuth0();

  console.log(isAuthenticated);
  console.log(loginWithRedirect);

  if (isLoading) {
    return <img style={{ width:"30%", height:"30%"}} src="loading.gif" />
  }

  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <span className="navbar-text">To-Do App</span>
        </div>
        {isAuthenticated ? (
          <>
            <img src={user.picture} alt={user.name} />
            <span>{user.name} </span>

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
              <button onClick={() => loginWithRedirect()} className="login">
                Login
              </button>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default NavBar;
