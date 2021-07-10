import {React,useContext,useState} from "react";
import {PostContext} from "../App"


  
const Comment = ({ post }) => {
    const [comment,setComment]=useState(false)
    const { actions } = useContext(PostContext)
    const [visible,setVisible] =useState(false)
    console.log(post)
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
            <p onClick={() => setVisible(!visible)}>{post.comments.length} comments  </p>
           
                <div>
                {
                  visible &&  post.comments.map(comment => {
                        return (
                           <div key={comment._id}>
                            <p>{comment.body} by {comment.userid.name}</p>
                       
                        </div>
                       )
                    }
                    
                    )}
                   
                </div>
            </>
    )
}
export default Comment;