import { useState } from "react";
import { config } from "../Constants";
import Loading from "../Loading";
import "./Login.css";

const Login = ({ onLogin }) => {
  const URL = config.authUrl;
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const username = e.target.user.value;
    const password = e.target.password.value;
    fetch(URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        if (res.status != 200) {
          throw new Error("Bad response");
        }
        return res.json();
      })
      .then((data) => {
        onLogin({ loggedIn: true, token: data.token });
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="login">
      <form action="" onSubmit={handleLogin} className="login-form">
        <img src="/logo.svg" alt="" />
        <label htmlFor="user">Usuario</label>
        <input type="text" name="user" id="user" />
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" />
        {isLoading ? <Loading /> : <button type="submit">Ingresar</button>}
      </form>
    </div>
  );
};

export default Login;
