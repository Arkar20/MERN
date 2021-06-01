const postReducer = (state=[],action) => {
    switch (action.type) {
        case ("FETCH_ALL_POSTS"):
           
                return action.payload
        
        default:
            return state
    }
}

export default postReducer