import {React,createContext,useReducer} from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter } from "react-router-dom"
import WebRoutes from "./routes/RouteWeb"
import "./App.css"
import postReducer from "./Reducers/postReducer"

export const PostContext = createContext()

const App = () => {
  const [state, dispatch] = useReducer(postReducer,null)
  
  return (
    <>
      <PostContext.Provider value={{state,dispatch}}>
          <BrowserRouter>
            <Navbar />
            <WebRoutes />
        </BrowserRouter>
       </PostContext.Provider>

  </> 
  )
}
export default App;
