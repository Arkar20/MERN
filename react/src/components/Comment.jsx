import {React,useContext,useState} from "react";
import {PostContext} from "../App"


  
const Comment = ({ post }) => {
    const [comment,setComment]=useState(false)
    const { actions } = useContext(PostContext)
    const [visible,setVisible] =useState(false)
  
    const addcomment = (e) => {
        e.preventDefault()
        console.log(post.id)
        const data={id:post.id,comment}
        actions.addComment(data)
       
    }
    return (
        <>
            <form onSubmit={addcomment}>
                <input type="text"
                    placeholder="add a comment"
                    onChange={(e)=>setComment(e.target.value)}
                />
                    </form>
            <p onClick={() => setVisible(true)}>{post.comments.length}  </p>
           
                <div>
                {
                    post.comments.map(comment => {
                        return (
                           <>
                            <p>{comment.body}</p>
                            <p>{comment.userid.name}</p>
                        </>
                       )
                    }
                    
                    )}
                   
                </div>
            </>
    )
}
export default Comment;