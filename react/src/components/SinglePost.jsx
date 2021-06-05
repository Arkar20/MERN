import axios from 'axios'
import { React,useContext,useState } from 'react'
import { PostContext } from '../App'
import Icon from "./Icon"
import {successMessage,errorMessage} from '../components/AlertMessage'
const SinglePost = ({ post }) => {
    const auth_user = JSON.parse(localStorage.getItem('signin_user'));
    const alreadyLiked = Boolean(post.likes.includes(auth_user._id))
    const [comment, setComment] = useState("");
    const { dispatch } = useContext(PostContext)
  
    const togglelike = () => {
      
        if(alreadyLiked)
        {
            dispatch({ type: "DISLIKE_THE_POST", payload: { id: post.id, auth_user } })
            axios.put('/posts/unlike', { post_id: post.id }, {
            headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
        }).catch(() => {
            return    dispatch({ type: "LIKE_THE_POST", payload: { id: post.id, auth_user } })
            })
        }
        else {
            dispatch({ type: "LIKE_THE_POST", payload: { id: post.id, auth_user } })
             axios.put('/posts/like',{post_id:post.id},{
            headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
        }).catch(() => {
            return  dispatch({ type: "DISLIKE_THE_POST", payload: { id: post.id, auth_user } })
        }) 
        }
      
        
    }
   
    const addcomment = (e)=>{
        e.preventDefault()
        axios.put(`/api/posts/${post.id}/comment`, { body: comment }, {
            headers: {"Authorization":`Bearer ${localStorage.getItem('token')}`}
        }).then(res =>
            successMessage("Comment added successfully")
            )
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
                                <form onSubmit={addcomment}>
                            <input type="text" placeholder="add a comment" onChange={ (e)=>setComment(e.target.value)}/>
                                </form>
                                <p>3 comments</p>
                            </div>
                        </div> 
                 </div>
        </>
    )
}
export default SinglePost