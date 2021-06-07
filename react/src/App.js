import {React,createContext,useReducer} from 'react';
import Navbar from "./components/Navbar"
import { Router } from "react-router-dom"
import WebRoutes from "./routes/RouteWeb"
import "./App.css"
import postReducer from "./Reducers/postReducer"
import { applyMiddlware } from "./actions/middleware"
import { useAction } from "./actions/action"
const createBrowserHistory=require("history").createBrowserHistory
export const PostContext = createContext()
export const history = createBrowserHistory()
const App = () => {
  const [state, dispatch] = useReducer(postReducer,null)
  const enhanceDispatch = applyMiddlware(dispatch)
  const actions = useAction(state, enhanceDispatch)
  
  return (
    <>
      <PostContext.Provider value={{state,enhanceDispatch,actions}}>
          <Router history={history}>
            <Navbar />
            <WebRoutes />
        </Router>
       </PostContext.Provider>

  </> 
  )
}
export default App;
