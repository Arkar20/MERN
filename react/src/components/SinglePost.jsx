import { React,useContext } from 'react'
import { PostContext } from '../App'
import Icon from "./Icon"
import Comment from "./Comment"
import {useHistory} from "react-router-dom"
const SinglePost = ({ post }) => {
    const history=useHistory()
    const auth_user = JSON.parse(localStorage.getItem('signin_user'));
    const alreadyLiked = Boolean(post.likes.includes(auth_user._id))
    const { actions } = useContext(PostContext)

    const togglelike = () => {
    const data={ post_id: post.id,id: post.id, auth_user }

            alreadyLiked
            ?actions.unlikePost(data)
            :actions.likePost(data)
                
        }
   
    const profilelink = () => {
            history.push(`/profile/${post.postowner.id}`)
        }

  
    return (
        <>
             <div className="home" key={post.id}>
                       <div className="card home-card">
                    <h5 style={{ padding: "5px" }} onClick={profilelink}>
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