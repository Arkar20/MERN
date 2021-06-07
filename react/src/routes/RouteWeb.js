import {useEffect,React} from "react"
import {  Route,Switch,useHistory } from "react-router-dom"
import Signin from "../Pages/Signin"
import Signup from "../Pages/Signup"
import Profile from "../Pages/Profile"
import Post from "../Pages/Post"
import CreatePost from "../Pages/CreatePost"
import {errorMessage} from "../components/AlertMessage"
const WebRoutes = () => {
  const history =useHistory()
  const user = JSON.parse(localStorage.getItem('signin_user'))

  useEffect(() => {
    if (!user) {
         
      history.push('/signin')
      return   errorMessage("You need to login first!")

    }
    history.push('/posts')
    
  }, [])
  
 
  return (
    <Switch>

   
    <Route path="/signin">
            <Signin />
          </Route>
          <Route  path="/profile/:userid">
            <Profile />
          </Route>
          <Route path="/posts">
            <Post />
            </Route>
         
          <Route path="/signup">
            <Signup />
            </Route>
          <Route path="/post">
            <CreatePost />
      </Route>
       </Switch>
  )
}
export default WebRoutes