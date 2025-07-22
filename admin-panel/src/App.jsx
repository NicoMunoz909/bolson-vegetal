import Navbar from "./Navbar";
import Products from "./Products";
import "./Backoffice.css";
import { useState } from "react";
import Login from "./Login";

const App = () => {
  const [auth, setAuth] = useState({ loggedIn: false, token: null });
  if (!auth.loggedIn) {
    return <Login onLogin={setAuth} />;
  }

  return (
    <div>
      <Navbar />
      <div style={{ marginLeft: "25vw" }}>
        <Products token={auth.token} />
      </div>
    </div>
  );
};

export default App;
