import React, { useEffect, useState, } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const data = {username :username , password : password}

    axios.post("http://localhost:3004/auth/login", data)
      .then((value) => {
        console.log(value.data);
      });
  };


  return (
    <div className="bg-blue-300">
      <input type="text " placeholder="username" onChange={(event) =>{setUsername(event.target.value)}} />
      <input type="text " placeholder="password"  onChange={(event) =>{setPassword(event.target.value)}} />
      <button onClick={login}>login</button>
    </div>
  );
}

export default Login;
