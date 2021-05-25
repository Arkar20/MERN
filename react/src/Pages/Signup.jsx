import React from 'react';
import {Link} from "react-router-dom"
const Signup = () => {
    return (
           <div className="mycard">
                    <div className="card auth-card input-field">
                        <h2>Instagram</h2>
                        <input
                        type="text"
                        placeholder="name"
                        autoFocus="true"
                        />
                        <input
                        type="text"
                        placeholder="email"
                        />
                        <input
                        type="password"
                        placeholder="password"
                        />
                        <button className="btn btn-primary">
                            Login
                        </button>
    
            </div>
            </div>
    )
}
export default Signup;