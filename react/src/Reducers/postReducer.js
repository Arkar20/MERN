// import { post } from "../../../server/routes/auth"
const togglelike = (state= null, action)=>{
    switch (action.type) {
        case ("LIKE_THE_POST"):
            if (state.id !== action.payload.id)
                    return state

            return { ...state, likes: [...state.likes, action.payload.auth_user._id] }
        
        case (types.UNLIKE_THE_POST):
            if (state.id !== action.payload.id)
                    return state

                 return {...state,likes:state.likes.filter(id=>{return id!==action.payload.auth_user._id})}
            
        default:
            return state;
            
   }

}

export const types = {
    FETCH_ALL_POSTS: "FETCH_ALL_POSTS",
    LIKE_THE_POST: "LIKE_THE_POST",
    UNLIKE_THE_POST: 'UNLIKE_THE_POST',
    CREATE_POST: "CREATE_POST",
    ADD_COMMENT:"ADD_COMMENT",
    
}

const postReducer = (state=[],action) => {
    switch (action.type) {
        case (types.FETCH_ALL_POSTS):
           
            return action.payload
        case (types.CREATE_POST):
            return [...state,action.payload]
        case (types.LIKE_THE_POST):
            return state.map(post => (togglelike(post, action))
            )
        case (types.UNLIKE_THE_POST):
            return state.map(post => (togglelike(post, action)))
        case (types.ADD_COMMENT):
            return state.map(post => {
                if (post.id !== action.payload.id) {
                    return post
                }
                return {
                    ...post,
                    comments:action.payload.comments
                }
            })
    
        default:
            return state
            
       
    }
}

export default postReducer