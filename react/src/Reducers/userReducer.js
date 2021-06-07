export const types = {
   
    SIGN_IN: "SIGN_IN",
    
}

export const userReducer = (state = [], action) => {
    switch (action.type) {
        
        case (types.GET_PROFILE):
            return action.payload
    
        case (types.SIGN_IN):
            return action.payload
        
        default:
            return state
  
    }
}


