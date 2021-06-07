import axios from 'axios'
import { React,useContext,useState } from 'react'
import { PostContext } from '../App'
import Icon from "./Icon"
import {successMessage} from '../components/AlertMessage'
import Comment from "./Comment"
const SinglePost = ({ post }) => {
    const auth_user = JSON.parse(localStorage.getItem('signin_user'));
    const alreadyLiked = Boolean(post.likes.includes(auth_user._id))
    const { actions } = useContext(PostContext)

    const togglelike = () => {
    const data={ post_id: post.id,id: post.id, auth_user }

            alreadyLiked
            ?actions.unlikePost(data)
            :actions.likePost(data)
                
        }
   
    

  
    return (
        <>
             <div className="home" key={post.id}>
                       <div className="card home-card">
                    <h5 style={{ padding: "5px" }}>
                                    { post.postowner && post.postowner.name}
                    </h5>
                            <div className="card-image">
                                <img alt={post.title} src={post.pic} />
                            </div>
                            <div className="card-content">
                         <Icon liked={alreadyLiked} likesno={post.likes.length} action={togglelike} />
                                <h6>{post.title}</h6>
                                <p>{ post.body}</p>
                                <Comment post={post} />
                            </div>
                        
                        </div> 
                 </div>
        </>
    )
}
export default SinglePost