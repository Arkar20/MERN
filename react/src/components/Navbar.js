import {React} from 'react';
import { Link } from 'react-router-dom'
const AuthLinks = ({profile}) => (
  <>
   <li>
          <Link to="/post">New Post</Link>
       </li>
        <li>
          <Link to={`/profile/${profile._id}`}>Profile</Link>
       </li>
  </>
)
const GuestLinks = () => {
  return (
    <>
       <li>
          <Link to="/signin">Signin</Link>
       </li>
        <li>
          <Link to="/signup">Sign Up</Link>
          </li>
      </>
  )
}

const Navbar = () => {
  const profile=JSON.parse(localStorage.getItem('signin_user'))
  const state=Boolean(localStorage.getItem("signin_user"))
  

  return (
     
  <nav>
    <div className="nav-wrapper">
          <Link to='/posts' className="brand-logo left">
            Instragram
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          {state ? <AuthLinks profile={ profile}/>
          :<GuestLinks /> 
        }
     
          </ul>
    </div>
  </nav>
  )
}
export default Navbar