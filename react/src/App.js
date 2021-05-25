import React from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter, Route } from "react-router-dom"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import Profile from "./Pages/Profile"
import Post from "./Pages/Post"
import CreatePost from "./Pages/CreatePost"

import "./App.css"
const App = () => {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/profile">
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
      </BrowserRouter>

  </> 
  )
}
export default App;
