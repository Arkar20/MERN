import {React,createContext,useReducer} from 'react';
import Navbar from "./components/Navbar"
import { Router } from "react-router-dom"
import WebRoutes from "./routes/RouteWeb"
import "./App.css"
import postReducer from "./Reducers/postReducer"
import { applyMiddlware } from "./actions/middleware"
import { useAction } from "./actions/action"
import { userReducer } from "./Reducers/userReducer"
import { userActions } from "./actions/useractions"
import {applyUserMiddlware} from "./actions/usermiddleware"


const createBrowserHistory=require("history").createBrowserHistory
export const PostContext = createContext()
export const history = createBrowserHistory()


const App = () => {

  //for posts
  const [state, dispatch] = useReducer(postReducer,null)
  const enhanceDispatch = applyMiddlware(dispatch)
  const actions = useAction(state, enhanceDispatch)

  //for users
  const [userstate, userdispatch] = useReducer(userReducer,  )
  const enhanceUserDispatch = applyUserMiddlware(userdispatch)
  const useractions = userActions(userstate,enhanceUserDispatch)
  
  return (
    <>
      <PostContext.Provider
        value={{
          state,
          enhanceDispatch,
          actions, //post
          userstate,
          userdispatch,
          useractions //users
        }}>
          <Router history={history}>
            <Navbar />
            <WebRoutes />
        </Router>
       </PostContext.Provider>

  </> 
  )
}
export default App;
