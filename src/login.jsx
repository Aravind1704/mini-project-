import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from './assets/logo.png'
import user from './assets/user.png'
import lock from './assets/lock.png' 
import "./login.css";
import './Home.jsx';

function Login() {
  function getBgColor() {
    return 'blue'
  }
  
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "4321") {
      setError("");
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={{ backgroundColor: getBgColor(), minHeight: '100vh' }}>
    <form onSubmit={handleLogin}>
      <img src={icon} alt="logo" className="logo" />

      <div className="inputbox">
        <img src={user} alt="user" className="input-icon" />
        <input
          type="text"
          placeholder="USERNAME"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className="inputbox">
        <img src={lock} alt="password" className="input-icon" />
        <input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">LOGIN</button>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      <h2 className="fg">Forgot password?</h2>
    </form>
    </div>
  );
 
}

export default Login;
