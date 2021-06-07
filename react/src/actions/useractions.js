import { types } from "../Reducers/userReducer"

export const userActions = (state, dispatch) => ({
    signup: data => dispatch({ type: types.SIGN_UP, payload: data }),
    signin: data=> dispatch({ type: types.SIGN_IN, payload: data})
})
    
