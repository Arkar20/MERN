import { types } from "../Reducers/userReducer"
import { successMessage, errorMessage } from '../components/AlertMessage'
import axios from 'axios'
import {history} from "../App"

export const applyUserMiddlware = dispatch => action => {
    switch (action.type) {
        case (types.SIGN_UP):
          return  axios.post('/signup', action.payload).then(res => {
            successMessage(res.data.message)
         return history.push('/signin')
        }).catch(error => {
          return  errorMessage(error.response.data.error)
        })
        case (types.SIGN_IN):
        return axios.post('/signin', action.payload).then(res => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('signin_user',JSON.stringify(res.data.authuser))
            dispatch({type:'SIGN_IN',payload:localStorage.getItem('signin_user')})
            successMessage("Login Successful")
            history.push('/posts')
        }).catch(error => {
            if(error)
                errorMessage(error.response.data.error)
        })
        default:
            return null
    }
}