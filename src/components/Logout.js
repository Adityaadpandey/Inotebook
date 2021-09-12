import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const Logout = () => {
  // const host = "https://inote-backend.herokuapp.com"
  const token = localStorage.getItem("token");
  //  fetch the name
  const Name = async() => {
    
    const response = await fetch('https://inote-backend.herokuapp.com/api/auth/getuser', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         "auth-token": token
    },})
    // eslint-disable-next-line
    const json = await response.json()
  
    localStorage.setItem("name", json.name)
    
    // setNotes(json)
  }

  
  if (token != null) {
    Name()
    const ok = localStorage.getItem("name");
    console.log(ok)
    return (
      <div>
        <form className="d-flex">
        <h2 className="ok mx-4">{ok}  </h2>
        <h3> </h3>
          <Link className=" btn btn-primary mx-1" to="/check" role="button">
            Logout
          </Link>
        </form>
      </div>
    );
  } else {
    
    return (
      <div>
        <form className="d-flex">
          <Link className=" btn btn-primary mx-1" to="/login" role="button">
            Login
          </Link>
          <Link className=" btn btn-primary mx-1" to="signup" role="button">
            Signup
          </Link>
        </form>
      </div>
    );
  }
};

export default Logout;
