import React from 'react';
import { Link } from "react-router-dom"
import { useState,useContext } from 'react'
import axios from 'axios'
import {successMessage,errorMessage} from '../components/AlertMessage'
import {useHistory} from 'react-router-dom'
import {PostContext} from '../App'


const Signin = () => {
    const { userstate,useractions } = useContext(PostContext)
    
    const history =useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(userstate)
    const SignIn = () => {
        useractions.signin()
        // axios.post('/signin', {  email, password }).then(res => {
        //     localStorage.setItem('token', res.data.token)
        //     localStorage.setItem('signin_user',JSON.stringify(res.data.authuser))
        //     dispatch({type:'NEW_USER',payload:localStorage.getItem('signin_user')})
        //     successMessage("Login Successful")
        //     history.push('/posts')
        // }).catch(error => {
        //     if(error)
        //         errorMessage(error.response.data.error)
        // })
    }
    return (
           <div className="mycard">
                    <div className="card auth-card input-field">
                        <h2>Sign In</h2>
             
                        <input
                            type="text"
                            placeholder="E-Mail"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <button
                            onClick={()=>SignIn()}
                            className="btn btn-default">
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