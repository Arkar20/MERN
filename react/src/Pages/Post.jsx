import React from 'react';
import { useEffect,useContext } from "react"
import axios from 'axios';
import {PostContext} from '../App'
import SinglePost from '../components/SinglePost'

const Post = () => {
    const {state,dispatch}=useContext(PostContext)
    useEffect(() => {
        if (!state) {
         axios.get('/posts').then(res => {
             dispatch({ type: "FETCH_ALL_POSTS", payload: res.data.posts })
           
        })    
        }
    }, [state,dispatch])
    return (
        <>
            {
                state
                    ?
                    
                    state.map(post => (

                            <SinglePost post={post} key={post.id}  />
                    ))
                   
                    : <div style={{ width: "100vw" }}>
                        <div className="progress">
                            <div className="indeterminate"></div>
                        </div>
                    </div>
            }
                   </>
    )
}
export default Post;