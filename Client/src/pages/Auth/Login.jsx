import axios from "axios";
import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      const res = await axios.post("http://localhost:9000/api/v1/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        navigate("/");

        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div>
        <form onSubmit={handleLogin}>
          <div
            className="form-container"
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div className="mb-4">
              <label htmlFor="email">email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="password">password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
