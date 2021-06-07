import React from 'react';
import { useEffect,useContext } from "react"
import axios from 'axios';
import {PostContext} from '../App'
import SinglePost from '../components/SinglePost'
import LoadingStatus from '../components/LoadingStatus';

const Post = () => {
    const {state,actions}=useContext(PostContext)
    useEffect(() => {
        if (!state) {
            actions.fetchAllPosts();
        }
    }, [state])


    return (
        <>
            {
                state
                    ?
                    
                    state.map(post => (

                            <SinglePost post={post} key={post.id}  />
                    ))
                   
                    :<LoadingStatus />
            }
                   </>
    )
}
export default Post;