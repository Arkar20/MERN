import React from 'react';
import { Link } from "react-router-dom"
import InputField from "../components/InputField"

const Signin = () => {

const showlog = (param) => {
    console.log(param)
}
    return (
           <div className="mycard">
                    <div className="card auth-card input-field">
                        <h2>Instagram</h2>
                <InputField
                    type="button"
                    placeholder="Please enter Name"
                    fun={showlog}
                    message="showing from parent"
                />
                        <input
                        type="password"
                    placeholder="password"
                
                        />
                        <button className="btn btn-default">
                            Login
                        </button>
                        <h5>
                            <Link to="/signup">Dont have an account ?</Link>
                        </h5>
                        <h6>
                            <Link to="/reset">Forgot password ?</Link>
                        </h6>
    
            </div>
            </div>
    )
}
export default Signin;