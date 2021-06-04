import axios from 'axios'
import { React,useContext } from 'react'
import { PostContext } from '../App'
import Icon from "./Icon"

const SinglePost = ({ post }) => {
    const auth_user = JSON.parse(localStorage.getItem('signin_user'));
    const alreadyLiked=Boolean(post.likes.includes(auth_user._id))
    const { dispatch } = useContext(PostContext)
    const togglelike = () => {
      
        if(alreadyLiked)
        {
            axios.put('/posts/unlike', { post_id: post.id }, {
            headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
        }).then(res => {
            return    dispatch({ type: "DISLIKE_THE_POST", payload: { id: post.id, auth_user } })
            })
        }
        else {
             axios.put('/posts/like',{post_id:post.id},{
            headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
        }).then(res => {
            return  dispatch({ type: "LIKE_THE_POST", payload: { id: post.id, auth_user } })
        }) 
        }
      
        
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
                                <form>
                                  <input type="text" placeholder="add a comment" />  
                                </form>
                                
                            </div>
                        </div> 
                 </div>
        </>
    )
}
export default SinglePost