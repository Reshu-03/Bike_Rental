import axios from "axios";
import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";

const LoginPage = () => {
        const [email, setEmail] = useState("");
        const [password]= useState("");
       // const history = useNavigate();
        const handleSubmit = (e) => { e.preventDefault();
        console.log("clciekd");
         axios
         .post("", {
           password: password,
           email: email,      
         });
      // history("/read");
     };
  return (
    <>
    <div className="mb-3">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
      <select className="form-select" aria-label="Default select example">
      <option selected>Bike Owner/Seller</option>
      <option value="Bikeowner">Bike Owner</option>
      <option value="Bikeseller">Bike Seller</option>
    </select>
      <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="password" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
      </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
  };

export default LoginPage;

