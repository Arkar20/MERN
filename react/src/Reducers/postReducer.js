// import { post } from "../../../server/routes/auth"
const togglelike = (state= null, action)=>{
    switch (action.type) {
        case ("LIKE_THE_POST"):
            if (state.id !== action.payload.id)
                    return state

            return { ...state, likes: [...state.likes, action.payload.auth_user._id] }
        
        case ("DISLIKE_THE_POST"):
            if (state.id !== action.payload.id)
                    return state

                 return {...state,likes:state.likes.filter(id=>{return id!==action.payload.auth_user._id})}
            
        default:
            return state;
            
   }

}


const postReducer = (state=[],action) => {
    switch (action.type) {
        case ("FETCH_ALL_POSTS"):
           
            return action.payload
        case ("ADD_POST"):
            return [...state, action.payload]
        case ("LIKE_THE_POST"):
            return state.map(post => (togglelike(post, action))
            )
        case ("DISLIKE_THE_POST"):
            return state.map(post => (togglelike(post, action)))
    
        default:
            return state
            
       
    }
}

export default postReducer