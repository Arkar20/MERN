import { useState,useContext, React } from 'react'
import axios from 'axios'
import {successMessage,errorMessage} from '../components/AlertMessage'
import {useHistory} from 'react-router-dom'
import {PostContext} from "../App"

const Signup = () => {
    const history =useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {userstate,useractions}=useContext(PostContext)


    const signUp = () => {
        const data={name,email,password}
        useractions.signup(data)
        // axios.post('/signup', { name, email, password }).then(res => {
        //     successMessage(res.data.message)
        //     history.push('/signin')
        // }).catch(error => {
        //     errorMessage(error.response.data.error)
        // })
    }

    return (
           <div className="mycard">
             <div className="card auth-card input-field">
                <h2>Instagram</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="name"
                            autoFocus={true}
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                        <input
                             type="email"
                            placeholder="name"
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
                            type="button"
                            className="btn btn-primary"
                            onClick={() => signUp()}>
                            Register
                        </button>
                    </form>
    
            </div>
            </div>
    )
}
export default Signup;