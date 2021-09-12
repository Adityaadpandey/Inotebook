import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
    let history = useHistory();
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    });
    const handleSubmit = async (e, name, email, password) => {
        e.preventDefault();
        const response = await fetch(" https://inote-backend.herokuapp.com/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                //    "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzNDRiYzFhZTc4NzRiZTA3M2JiYWJmIn0sImlhdCI6MTYzMTAwODU5OX0.fFdZmMml4_Wzw_TxMhGoiWiqGriA9JX8naTIoQGpO4o"
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
            }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // redirect
            localStorage.setItem("token", json.authtoken);
            history.push("/");
            window.location.reload(true);
            alert("signup successful")
        } else {
            alert("wrong credentials");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={credentials.name}
                        onChange={onChange}
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={credentials.email}
                        onChange={onChange}
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        minLength={5}
                        required
                        name="password"
                        value={credentials.password}
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="cpassword"
                        minLength={5}
                        required
                        name="cpassword"
                        value={credentials.cpassword}
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};


export default Signup;
