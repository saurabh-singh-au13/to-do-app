import logo from "./logo.svg";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  const {  isLoading, isAuthenticated } =
    useAuth0();

  if (isLoading) {
    return (
      <div className="load">

        <h1>Loading...</h1>
      </div>
      
    );
  }

  return (
    <>
      <NavBar />
      {isAuthenticated ? (
        <>
          <Main />
        </>
      ) : null}
    </>
  );
}

export default App;
