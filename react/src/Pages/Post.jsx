import React from 'react';
import { useEffect,useState,useContext } from "react"
import axios from 'axios';
import {PostContext} from '../App'


const Post = () => {
    const {state,dispatch}=useContext(PostContext)
    console.log(state)
    useEffect(() => {
        if (!state) {
         axios.get('/posts').then(res => {
             dispatch({ type: "FETCH_ALL_POSTS", payload: res.data.posts })
           
        })    
        }
    }, [state])

    // console.log(state)
    // useEffect(() => {
    //    if (!state) {
    //      axios.get('/posts').then(res => {
    //         setPosts(res.data.posts)
    //                    dispatch({type:"FETCH_ALL_POSTS",payload:res.data.posts})
    //     })
    // }
    // },[state])
    return (
        <>
            {
                state
                    ?
                    
                    state.map(post => (
                         <div className="home" key={post.id}>
                       <div className="card home-card">
                    <h5 style={{ padding: "5px" }}>
                                    { post.postowner && post.postowner.name}
                    </h5>
                            <div className="card-image">
                                <img alt="post-img" src="https://images.unsplash.com/photo-1621946453621-a6ed338d8922?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            <div className="card-content">
                            <i className="material-icons" style={{color:"red"}}>favorite</i>
                                <h6>4 likes</h6>
                                <h6>{post.title}</h6>
                                    <p>{ post.body}</p>
                                <form>
                                  <input type="text" placeholder="add a comment" />  
                                </form>
                                
                            </div>
                        </div> 
                 </div>
                    ))
                   
                    : <div style={{ width: "100vw"}}>
                        <div class="progress">
                            <div class="indeterminate"></div>
                        </div>
                     </div>
                   
 
        
            }
           
                    

                
            
                   </>
    )
}
export default Post;